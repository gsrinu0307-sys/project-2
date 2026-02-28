const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const pool = require("../config/db");

/* ================= EMAIL TRANSPORTER ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= COMMON RESPONSE FORMAT ================= */
const sendResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    success: status < 400,
    message,
    data,
  });
};

/* ================= REGISTER ================= */
exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    } = req.body;

    // VALIDATION
    if (!firstName || !lastName) {
      return res.status(400).json({ message: "First and last name required" });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Valid email required" });
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({ message: "Valid 10-digit phone required" });
    }

    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // CHECK EXISTING USER
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 12);

    // INSERT USER
    await pool.query(
      `INSERT INTO users 
      (first_name, last_name, email, phone, password)
      VALUES ($1, $2, $3, $4, $5)`,
      [firstName, lastName, email, phone, hashedPassword]
    );

    return res.status(201).json({
      message: "Account created successfully",
    });

  } catch (err) {
    console.error("❌ REGISTER ERROR:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

/* ================= LOGIN ================= */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return sendResponse(res, 400, "Email and password required");

    const result = await pool.query(
      "SELECT id, first_name, email, password FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0)
      return sendResponse(res, 401, "Invalid email or password");

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return sendResponse(res, 401, "Invalid email or password");

    // CREATE TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return sendResponse(res, 200, "Login successful", {
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);
    return sendResponse(res, 500, "Server error");
  }
};

/* ================= FORGOT PASSWORD ================= */
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return sendResponse(res, 400, "Email required");

    const result = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    // Always return same message for security
    if (result.rows.length === 0)
      return sendResponse(res, 200, "If email exists, reset link sent");

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 15 * 60 * 1000);

    await pool.query(
      `UPDATE users
       SET reset_token = $1,
           reset_token_expiry = $2
       WHERE email = $3`,
      [token, expiry, email]
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset/${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `
        <h3>Password Reset</h3>
        <p>Click below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link is valid for 15 minutes.</p>
      `,
    });

    return sendResponse(res, 200, "If email exists, reset link sent");

  } catch (err) {
    console.error("❌ FORGOT PASSWORD ERROR:", err);
    return sendResponse(res, 500, "Server error");
  }
};

/* ================= RESET PASSWORD ================= */
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password || password.length < 6)
      return sendResponse(res, 400, "Password must be at least 6 characters");

    const user = await pool.query(
      `SELECT id FROM users
       WHERE reset_token = $1
       AND reset_token_expiry > NOW()`,
      [token]
    );

    if (user.rows.length === 0)
      return sendResponse(res, 400, "Invalid or expired token");

    const hashedPassword = await bcrypt.hash(password, 12);

    await pool.query(
      `UPDATE users
       SET password = $1,
           reset_token = NULL,
           reset_token_expiry = NULL
       WHERE reset_token = $2`,
      [hashedPassword, token]
    );

    return sendResponse(res, 200, "Password updated successfully");

  } catch (err) {
    console.error("❌ RESET PASSWORD ERROR:", err);
    return sendResponse(res, 500, "Server error");
  }
};
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/auth");
const adminRoutes = require("./Routes/adminRoutes");
const employeeRoutes = require("./Routes/employeeRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

/* ================= CORS CONFIG ================= */

const allowedOrigins = [
  "http://localhost:5173", // local frontend (Vite)
  "http://localhost:3000", // if using CRA
  process.env.FRONTEND_URL // Vercel frontend
].filter(Boolean); // removes undefined

app.use(
  cors({
    origin: (origin, callback) => {
      // allow Postman or server-to-server calls
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ================= MIDDLEWARE ================= */

app.use(express.json());

/* ================= ROUTES ================= */

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/employees", employeeRoutes);

/* ================= ERROR HANDLER ================= */

app.use(errorHandler);

/* ================= SERVER ================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
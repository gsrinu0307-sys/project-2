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
  "http://localhost:5173", // Local frontend
  process.env.FRONTEND_URL // Production frontend (Vercel)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

/* ================= MIDDLEWARE ================= */

app.use(express.json());

/* ================= ROUTES ================= */

// Health check route
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
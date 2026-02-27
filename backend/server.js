require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/auth");
const adminRoutes = require("./Routes/adminRoutes");

const employeeRoutes = require("./Routes/employeeRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/employees", employeeRoutes);

// Error middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import visitRoutes from "./routes/visitRoutes.js";
import drugRoutes from "./routes/drugRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://clinicflow-frontend-app.onrender.com"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/drugs", drugRoutes);
app.use("/api/appointments", appointmentRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "ClinicFlow API running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

export default app;
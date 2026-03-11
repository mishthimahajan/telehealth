

import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";

import indexRouter from "./routes/index.js";
import symptomRoutes from "./routes/symptomChecker.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import aiRoutes from "./routes/index.js";
import reportRoutes from "./routes/reportRoutes.js"

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/ai", aiRoutes);

app.use("/api", indexRouter);
app.use("/api/symptoms", symptomRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/reports",reportRoutes);
console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

export default app;

import express from "express";
// import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/index.js";
import connectDB from "./config/db.js";
import symptomRoutes from "./routes/symptomChecker.js";
// dotenv.config();
connectDB();


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", indexRouter);
app.use("/api/symptoms", symptomRoutes);

export default app;




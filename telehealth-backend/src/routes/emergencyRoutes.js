import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { sendEmergencyAlert } from "../controllers/emergencyController.js";

const router = express.Router();

router.post("/alert", authMiddleware, sendEmergencyAlert);

export default router;
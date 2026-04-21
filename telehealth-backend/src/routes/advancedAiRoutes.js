import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { advancedAnalyzeSymptoms } from "../controllers/advancedAiController.js";

const router = express.Router();

router.post("/analyze", authMiddleware, advancedAnalyzeSymptoms);

export default router;
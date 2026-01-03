import express from "express";
import {
  checkSymptoms,
  
} from "../controllers/symptomController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// router.post("/check", authMiddleware, checkSymptoms);
// router.get("/history", authMiddleware, getSymptomHistory);
router.post("/check", authMiddleware, checkSymptoms);

export default router;

import express from "express";
import { signup, login } from "../controllers/userController.js";
import { googleAuth } from "../controllers/googleAuthController.js";
import {
  checkSymptoms,
  getSymptomHistory,
} from "../controllers/symptomController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "TeleHealth API running 🚀" });
// });

router.post("/signup", signup);
router.post("/login", login);
router.post("/auth/google", googleAuth);
router.post("/symptoms/check", authMiddleware, checkSymptoms);
router.get("/symptoms/history", authMiddleware, getSymptomHistory);


export default router;

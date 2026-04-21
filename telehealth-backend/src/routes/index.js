// import express from "express";
// import { signup, login } from "../controllers/userController.js";
// import {googleLogin} from "../controllers/googleAuthController.js";
// import {
//   checkSymptoms,
//   getSymptomHistory,
// } from "../controllers/symptomController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import { getDoctors } from "../controllers/doctorController.js";

// import doctorRoutes from "./doctorRoutes.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/auth/google", googleLogin);

// router.post("/symptoms/check", authMiddleware, checkSymptoms);
// router.get("/symptoms/history", authMiddleware, getSymptomHistory);
// router.get("/",authMiddleware, getDoctors);
// router.get("/doctors", doctorRoutes);
// export default router;

// import express from "express";
// import { signup, login } from "../controllers/userController.js";
// import { googleLogin } from "../controllers/googleAuthController.js";
// import {
//   checkSymptoms,
//   getSymptomHistory,
// } from "../controllers/symptomController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/auth/google", googleLogin);


// router.post("/symptoms/check", authMiddleware, checkSymptoms);
// router.get("/symptoms/history", authMiddleware, getSymptomHistory);


// router.use("/doctors", doctorRoutes);

// export default router;


// import express from "express";
// import { signup, login } from "../controllers/userController.js";
// import { googleLogin } from "../controllers/googleAuthController.js";
// import {
//   checkSymptoms,
//   getSymptomHistory,
// } from "../controllers/symptomController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import doctorRoutes from "./doctorRoutes.js"; 
// import { analyzeSymptomsAI } from "../controllers/aiDoctorController.js";


// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/auth/google", googleLogin);

// router.post("/symptoms/check", authMiddleware, analyzeSymptomsAI);

// router.get("/symptoms/history", authMiddleware, getSymptomHistory);

// router.use("/doctors", doctorRoutes);

// export default router;


// import express from "express";
// import { signup, login } from "../controllers/userController.js";
// import { googleLogin } from "../controllers/googleAuthController.js";
// import { analyzeSymptomsAI } from "../controllers/aiDoctorController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import doctorRoutes from "./doctorRoutes.js";


// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/auth/google", googleLogin);

// router.post("/analyze-symptoms", authMiddleware, analyzeSymptomsAI);
// // router.post("/symptoms/check", authMiddleware, analyzeSymptomsAI);

// router.use("/doctors", doctorRoutes);

// export default router;


import express from "express";
import { signup, login } from "../controllers/userController.js";
import { googleLogin } from "../controllers/googleAuthController.js";
import { analyzeSymptomsAI, generateDoctorAI } from "../controllers/aiDoctorController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import doctorRoutes from "./doctorRoutes.js";
import advancedAiRoutes from "./advancedAiRoutes.js";
import emergencyRoutes from "./emergencyRoutes.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/auth/google", googleLogin);

// AI Symptom Analysis
router.post("/analyze-symptoms", authMiddleware, analyzeSymptomsAI);

// ✅ AI Doctor Generation (NEW)
router.post("/generate-doctor", authMiddleware, generateDoctorAI);

router.use("/doctors", doctorRoutes);
router.use("/advanced-ai",advancedAiRoutes);
router.use("/emergency",emergencyRoutes);

export default router;
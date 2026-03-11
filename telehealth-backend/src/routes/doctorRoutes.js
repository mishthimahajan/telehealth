// import express from "express";
// // import { getDoctors } from "../controllers/doctorController.js";
// import { addDoctor, getDoctors } from "../controllers/doctorController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();
// router.post("/",authMiddleware, addDoctor);

// router.get("/", getDoctors);
// // router.get("/doctors", authMiddleware, async (req, res) => {
// //   const { specialization } = req.query;

// //   const doctors = specialization
// //     ? await Doctor.find({ specialization })
// //     : await Doctor.find();

// //   res.json({ doctors });
// // });

// router.get("/", async (req, res) => {
//   const { specialization } = req.query;

//   try {
//     const doctors = await Doctor.find({
//       specialization: {
//         $regex: specialization,
//         $options: "i", 
//       },
//     });

//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });



// export default router;

// import express from "express";
// import { addDoctor } from "../controllers/doctorController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import Doctor from "../models/Doctor.js";

// const router = express.Router();

// // Add doctor (protected)
// router.post("/", authMiddleware, addDoctor);

// // ✅ Get doctors by specialization (AI-friendly)
// router.get("/", async (req, res) => {
//   const { specialization } = req.query;

//   try {
//     let doctors;

//     if (specialization) {
//       doctors = await Doctor.find({
//         specialization: { $regex: specialization, $options: "i" },
//       });
//     } else {
//       doctors = await Doctor.find();
//     }

//     res.status(200).json(doctors);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;


// import express from "express";
// import authMiddleware from "../middleware/authMiddleware.js";
// import Doctor from "../models/Doctor.js";

// const router = express.Router();

// // Add doctor
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const doctor = await Doctor.create(req.body);
//     res.status(201).json(doctor);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ ONLY ONE GET ROUTE
// router.get("/", async (req, res) => {
//   const { specialization } = req.query;

//   try {
//     const doctors = specialization
//       ? await Doctor.find({
//           specialization: { $regex: specialization, $options: "i" },
//         })
//       : await Doctor.find();

//     res.status(200).json(doctors);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;


// import express from "express";
// import Doctor from "../models/Doctor.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   const { specialization } = req.query;

//   try {
//     const filter = specialization
//       ? { specialization: { $regex: specialization, $options: "i" } }
//       : {};

//     const doctors = await Doctor.find(filter);
//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

import express from "express";
import Doctor from "../models/Doctor.js";
import { getRecommendedDoctors } from "../controllers/doctorController.js";

const router = express.Router();
router.get("/recommended", getRecommendedDoctors);

router.get("/by-specialization", async (req, res) => {
  try {
    const { specialization } = req.query;

    const doctors = await Doctor.find({
      specialization: { $regex: specialization, $options: "i" },
    });

    res.json(doctors);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

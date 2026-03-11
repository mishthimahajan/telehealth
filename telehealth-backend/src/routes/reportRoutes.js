// const express = require("express");
// const router = express.Router();
// const Report = require("../models/Report");
// const authMiddleware = require("../middleware/auth");

// router.get("/", authMiddleware, async (req, res) => {
//   const reports = await Report.find({ user: req.user.id }).sort({ createdAt: -1 });
//   res.json(reports);
// });

// module.exports = router;

// import express from "express";
// import Report from "../models/Report.js";
// import authMiddleware from "../middleware/auth.js";

// const router = express.Router();

// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     // const reports = await Report.find({ user: req.user.id })
//     //   .sort({ createdAt: -1 });
//     const reports = await Report.find().sort({ createdAt: -1 });

//     res.json(reports);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// router.post("/create", async (req, res) => {
//   try {
//     const { symptoms, diagnosis, severity } = req.body;

//     const report = new Report({
//       user: req.user.id,   
//       symptoms,
//       diagnosis,
//       severity,
//     });

//     await report.save();

//     res.json({ message: "Report saved successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// // router.get("/", authMiddleware, async (req, res) => {
// //   try {
// //     const reports = await Report.find({
// //       user: req.user.id,
// //     }).sort({ createdAt: -1 });

// //     res.json(reports);
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// export default router;


import express from "express";
import Report from "../models/Report.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();


/* =========================
   GET USER REPORTS
========================= */

router.get("/", authMiddleware, async (req, res) => {
  try {

    const reports = await Report.find({
      user: req.user.id
    }).sort({ createdAt: -1 });

    res.json(reports);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


/* =========================
   CREATE NEW REPORT
========================= */

router.post("/create", authMiddleware, async (req, res) => {
  try {

    const { symptoms, diagnosis, severity } = req.body;

    const report = new Report({
      user: req.user.id,
      symptoms,
      diagnosis,
      severity
    });

    await report.save();

    res.json({
      message: "Report saved successfully",
      report
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
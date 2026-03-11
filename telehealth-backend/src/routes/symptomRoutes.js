const express = require("express");
const router = express.Router();
const Report = require("../models/Report");
const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/auth");

router.post("/check", authMiddleware, async (req, res) => {
  try {
    const { symptoms } = req.body;

    // 🔥 Fake AI logic example
    let aiResult = {
      title: "AI Health Analysis",
      description: "Based on your symptoms, it may be viral fever.",
      severity: "Medium",
    };

    // ✅ SAVE REPORT
    const report = new Report({
      user: req.user.id,
      title: aiResult.title,
      description: aiResult.description,
      severity: aiResult.severity,
    });

    await report.save();

    // ✅ If severe → auto create appointment
    if (aiResult.severity === "High") {
      const appointment = new Appointment({
        user: req.user.id,
        doctorName: "Dr. Sharma",
        specialization: "General Physician",
        date: new Date(),
        time: "10:00 AM",
      });

      await appointment.save();
    }

    res.json({
      message: "AI analysis completed",
      report,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
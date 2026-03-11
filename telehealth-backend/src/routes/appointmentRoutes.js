// import express from "express";
// import {
//   bookAppointment,
//   getMyAppointments,
// } from "../controllers/appointmentController.js";
// import authMiddleware from "../middleware/auth.js";

// const router = express.Router();

// router.post("/book", authMiddleware, bookAppointment);
// router.get("/my", authMiddleware, getMyAppointments);

// export default router;
import express from "express";
import {
  bookAppointment,
  getMyAppointments,
  cancelAppointment,
} from "../controllers/appointmentController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import protect from "../middleware/authMiddleware.js";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// router.post("/book", authMiddleware, bookAppointment);
// router.get("/my", protect, getMyAppointments);
router.put("/cancel/:id", authMiddleware, cancelAppointment);
router.get("/my", authMiddleware, async (req, res) => {
  const appointments = await Appointment.find({ user: req.user.id });
  res.json(appointments);
});
router.post("/book", authMiddleware, async (req, res) => {
  try {
    const { doctorName, specialization, date, time, doctorImage } = req.body;

    const appointment = new Appointment({
      user: req.user.id,  // 🔥 VERY IMPORTANT
      doctorName,
      specialization,
      doctorImage,
      date,
      time,
      status: "Pending",
    });

    await appointment.save();

    res.json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
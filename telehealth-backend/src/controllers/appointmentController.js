// import Appointment from "../models/Appointment.js";

// export const bookAppointment = async (req, res) => {
//   try {
//     const { doctorId, date, time } = req.body;

//     if (!doctorId || !date || !time) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const appointment = await Appointment.create({
//       patient: req.user.id,
//       doctor: doctorId,
//       date,
//       time,
//     });

//     res.status(201).json({
//       message: "Appointment booked successfully",
//       appointment,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Booking failed" });
//   }
// };

// export const getMyAppointments = async (req, res) => {
//   const appointments = await Appointment.find({
//     patient: req.user.id,
//   }).populate("doctor");

//   res.json(appointments);
// };
// import Appointment from "../models/Appointment.js";

// export const bookAppointment = async (req, res) => {
//   try {
//     const { doctorId, date, time } = req.body;

//     const appointment = new Appointment({
//       userId: req.user.id,
//       doctorId,
//       date,
//       time,
//     });

//     await appointment.save();
//     res.json({ message: "Appointment booked successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Booking failed" });
//   }
// };


// import Appointment from "../models/Appointment.js";

// export const bookAppointment = async (req, res) => {
//   try {
//     const { doctorName, specialization, date, time } = req.body;

//     const appointment = new Appointment({
//       user: req.user.id,
//       doctorName,
//       specialization,
//       date,
//       time,
//     });

//     await appointment.save();

//     res.status(201).json({
//       message: "Appointment booked successfully",
//       appointment,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Booking failed" });
//   }
// };
// export const cancelAppointment = async (req, res) => {
//   try {
//     const appointment = await Appointment.findByIdAndUpdate(
//       req.params.id,
//       { status: "Cancelled" },
//       { new: true }
//     );

//     if (!appointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.status(200).json({
//       message: "Appointment cancelled successfully",
//       appointment,
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

import Appointment from "../models/Appointment.js";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

/* ===============================
   📌 Book Appointment
================================= */
export const bookAppointment = async (req, res) => {
  try {
    const { doctorName, specialization, date, time } = req.body;

    const appointment = new Appointment({
      user: req.user.id,
      doctorName,
      specialization,
      date,
      time,
      doctorImage,
      status: "Confirmed",
    });

    await appointment.save();
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: req.user.email,
      subject: "Appointment Confirmation",
      html: `
        <h2>Appointment Confirmed ✅</h2>
        <p><strong>Doctor:</strong> Dr. ${doctorName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>Thank you for booking with TeleHealth.</p>
      `,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Booking failed" });
  }
};


/* ===============================
   📌 Get My Appointments
================================= */
export const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(appointments);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
};


/* ===============================
   📌 Cancel Appointment
================================= */
export const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id }, // 🔥 important security fix
      { status: "Cancelled" },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment cancelled successfully",
      appointment,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
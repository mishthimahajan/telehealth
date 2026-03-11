

// import Doctor from "../models/Doctor.js";



// export const getDoctors = async (req, res) => {
//   try {
//     const { specialization } = req.query;

//     let doctors;

//     if (specialization) {
//       doctors = await Doctor.find({ specialization });
//     } else {
//       doctors = await Doctor.find();
//     }

//     res.status(200).json(doctors);
//   } catch (error) {
//     res.status(500).json({ message: "Doctor fetch failed" });
//   }
// };
// ✅ ADD DOCTOR
// export const getDoctors = async (req, res) => {
//   try {
//     const { specialization } = req.query;

//     let doctors;

//     if (specialization) {
//       doctors = await Doctor.find({
//         specialization: { $regex: specialization, $options: "i" }
//       });
//     } else {
//       doctors = await Doctor.find();
//     }

//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch doctors" });
//   }
// }




// export const addDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.create(req.body);
//     res.status(201).json(doctor);
//   } catch (error) {
//     console.error("Add doctor error:", error);
//     res.status(500).json({ message: "Failed to add doctor" });
//   }
// };

import Doctor from "../models/Doctor.js";

export const getRecommendedDoctors = async (req, res) => {
  try {
    const { specialization } = req.query;

    const doctors = await Doctor.find({
      specialization: { $regex: specialization, $options: "i" }
    })
      .sort({
        rating: -1,
        experience: -1
      })
      .limit(5); 

    res.json(doctors);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
};
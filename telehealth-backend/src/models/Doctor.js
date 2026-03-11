// import mongoose from "mongoose";

// const doctorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   specialization: {
//     type: String,
//     required: true,
//   },
// });
// const doctorSchema = new mongoose.Schema({
//   name: String,
//   specialization: String,
  
//   experience: Number,
//   availability: Boolean,

// });

// export default mongoose.model("Doctor", doctorSchema);

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  rating: Number,
  availableSlots: [String], 
});

export default mongoose.model("Doctor", doctorSchema);

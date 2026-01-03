// import image from "../assets/image.png";

// const Hero = () => {
//   return (
//     <section className="w-full bg-linear-to-br from-blue-50 to-white px-10 py-20 flex flex-col md:flex-row items-center justify-between">

//       {/* LEFT TEXT */}
//       <div className="md:w-1/2">
//         <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
//           Your Health, <br /> Connected.
//         </h1>

//         <p className="mt-6 text-lg text-gray-600">
//           Get instant doctor consultations and AI-powered symptom analysis
//           from the comfort of your home.
//         </p>

//         <button className="mt-8 bg-blue-600 text-black px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
//           Get Started
//         </button>
//       </div>

      
//       <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
//   <div className="w-87.5 h-87.5 bg-blue-100 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
    
//     <img
//       src={image}
//       alt="Doctor Consultation"
//       className="w-[80%] h-[80%] object-contain"
//     />

//   </div>
// </div>


//     </section>
//   );
// };

// export default Hero;

import image from "../assets/image.png";

const Hero = () => {
  return (
    <section className="w-full bg-linear-to-br from-blue-200 via-white to-blue-500 px-10 py-24 flex flex-col md:flex-row items-center justify-between">

      {/* LEFT TEXT */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          Your Health, <br /> Connected.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Get instant doctor consultations and AI-powered symptom analysis
          from the comfort of your home.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
          Get Started
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 mt-14 md:mt-0 flex justify-center">
        <img
          src={image}
          alt="Doctor Consultation"
          className="w-420px rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </section>
  );
};

export default Hero;

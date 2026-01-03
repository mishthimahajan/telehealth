import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
// import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      {/* FEATURES SECTION */}
      <section className="px-10 py-20 bg-blue-500">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Symptom Checker"
            desc="Instant AI-based health analysis before consulting a doctor."
          />
          <FeatureCard
            icon="📅"
            title="Book Appointments"
            desc="Schedule online consultations with certified doctors easily."
          />
          <FeatureCard
            icon="📹"
            title="Video Consultations"
            desc="Secure, real-time video calls with healthcare professionals."
          />
          <FeatureCard
            icon="📄"
            title="Reports & Prescriptions"
            desc="Access medical reports and prescriptions anytime, anywhere."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

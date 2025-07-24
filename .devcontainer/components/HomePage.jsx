// pages/HomePage.jsx
import React, { useRef } from "react";
import DonationFlow from "../components/DonationFlow";
import "../styles/WaterEffect.css";

const HomePage = () => {
  const handleSubmit = (data) => {
    console.log("Donation submitted:", data);
  };

  const donationSectionRef = useRef(null);

  const scrollToDonation = () => {
    if (donationSectionRef.current) {
      donationSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans relative overflow-hidden">
      {/* Subtle Background Water Effect */}
      <div className="water-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Give the gift of clean water</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          100% of your donation goes directly to clean water projects.
        </p>

        {/* Top Right Dropdown Donation Menu */}
        <div className="absolute top-6 right-6">
          <DonationFlow defaultPlan="once" onSubmit={handleSubmit} />
        </div>
      </section>

      {/* Middle Content with Impact Statement and Graphic Placeholder */}
      <section className="px-6 py-20 bg-neutral-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Water?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Access to clean water means education, income and health - especially for women and kids.
        </p>
        <div className="w-full h-64 bg-neutral-700 rounded-xl mb-6 flex items-center justify-center">
          <span className="text-neutral-400">[impact image or infographic]</span>
        </div>
      </section>

      {/* Sticky Bar Section */}
      <div className="sticky top-0 z-50 bg-blue-600 text-white shadow-md py-3 px-6 text-center">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <span className="text-sm">$500,000 raised · $250,000 to go</span>
          <button
            onClick={scrollToDonation}
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full"
          >
            Give
          </button>
        </div>
      </div>

      {/* Lower Donation Section (Always Visible) */}
      <section ref={donationSectionRef} className="bg-neutral-900 px-6 py-20">
        <h2 className="text-2xl font-semibold text-center mb-4">You're making a difference</h2>
        <p className="text-center mb-8 max-w-xl mx-auto">
          100% of public donations go to fund clean water projects. You can be part of the solution.
        </p>

        <DonationFlow defaultPlan="monthly" inline onSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default HomePage;

// pages/LandingPage.jsx
import React from "react";
import DonationBar from "../components/DonationBar";
import DropdownButton from "../components/DropdownButton";
import RotatingRing from "../components/RotatingRing";
import LandingPage from './LandingPage';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans">
      <header className="flex justify-between items-center p-4">
        <a href="https://www.charitywater.org" target="_blank" rel="noopener noreferrer">
          <img src="/logo.svg" alt="charity: water" className="h-10 cursor-pointer" />
        </a>
        <div className="flex gap-2">
          <DropdownButton label="Give Once" />
          <DropdownButton label="Give Monthly" />
        </div>
      </header>

      <main className="px-4 py-12">
        <h1 className="text-4xl mb-6">100% Goes to Clean Water</h1>
        <RotatingRing />
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg" id="give-button">
          Give
        </button>
        <button className="mt-4 px-4 py-2 underline" id="next-step-button">
          Take the next step
        </button>
      </main>

      <DonationBar />
    </div>
  );
};

export default LandingPage;


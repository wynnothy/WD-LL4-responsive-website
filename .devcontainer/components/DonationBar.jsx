// components/DonationBar.jsx
import React, { useEffect, useState } from "react";

const DonationBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`transition-all ${sticky ? "fixed top-0" : "fixed bottom-0"} left-0 w-full bg-blue-600 text-white py-3 px-6 z-50 flex justify-between`}>
      <span>$2.1M Raised</span>
      <span>$0.9M Remaining</span>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-full">Give</button>
    </div>
  );
};

export default DonationBar;


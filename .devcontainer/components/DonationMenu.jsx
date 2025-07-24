// components/DonationMenu.jsx
import React, { useState } from "react";

const DonationMenu = ({ onSelect }) => {
  const options = [5, 20, 100];
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSelect = (amount) => {
    onSelect(amount);
  };

  return (
    <div className="absolute top-full mt-2 bg-white text-blue-600 rounded shadow-lg p-4 w-48">
      {options.map((opt, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-blue-100 cursor-pointer rounded"
          onClick={() => handleSelect(opt)}
        >
          ${opt}
        </div>
      ))}
      <div
        className="px-4 py-2 hover:bg-blue-100 cursor-pointer rounded"
        onClick={() => setShowCustomInput(true)}
      >
        Custom
      </div>
      {showCustomInput && (
        <div className="mt-2">
          <input
            type="number"
            placeholder="$ Amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <button
            onClick={() => handleSelect(Number(customAmount))}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded"
          >
            Give ${customAmount || ""}
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationMenu;


// components/DropdownButton.jsx
import React, { useState } from "react";

const DropdownButton = ({ label }) => {
  const [open, setOpen] = useState(false);
  const options = [5, 20, 100, "Custom"];

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="bg-white text-blue-600 px-4 py-2 rounded-full">
        {label}
      </button>
      {open && (
        <ul className="absolute top-full mt-2 bg-white text-blue-600 rounded shadow-lg p-2">
          {options.map((opt, i) => (
            <li key={i} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              {typeof opt === 'number' ? `$${opt}` : opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;


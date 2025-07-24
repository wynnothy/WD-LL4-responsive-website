// components/RotatingRing.jsx
import React from "react";
import "./RotatingRing.css";

const RotatingRing = () => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div className="absolute w-full h-full rounded-full border-4 border-blue-600 animate-rotate"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
        100%
      </div>
    </div>
  );
};

export default RotatingRing;


// components/ButtonHoverEffect.jsx
import React from "react";
import "./ButtonHoverEffect.css";

const ButtonHoverEffect = ({ children, className = "", ...props }) => {
  return (
    <button className={`hover-glow ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonHoverEffect;

// components/BackgroundBubbles.jsx
import React, { useEffect } from "react";
import "./BackgroundBubbles.css";

const BackgroundBubbles = () => {
  useEffect(() => {
    const bubbleContainer = document.getElementById("bubble-container");
    const interval = setInterval(() => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`;
      bubbleContainer.appendChild(bubble);
      setTimeout(() => bubble.remove(), 7000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div id="bubble-container" className="absolute inset-0 z-0" />;
};

export default BackgroundBubbles;


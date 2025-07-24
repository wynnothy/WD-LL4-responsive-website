// components/CursorEffect.jsx
import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const triggerBurst = (e) => {
      const burst = document.createElement("div");
      burst.className = "fixed z-50 pointer-events-none text-pink-400 text-lg animate-ping-fast";
      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;
      burst.innerText = "💖✨";
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 500);
    };

    document.getElementById("give-button")?.addEventListener("click", triggerBurst);
    document.getElementById("next-step-button")?.addEventListener("click", triggerBurst);

    return () => {
      document.getElementById("give-button")?.removeEventListener("click", triggerBurst);
      document.getElementById("next-step-button")?.removeEventListener("click", triggerBurst);
    };
  }, []);

  return null;
};

const sparkleStyle = `
  position: fixed;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #ffffff 40%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: sparkle-pop 0.5s ease-out forwards;
  z-index: 9999;
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes sparkle-pop {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}`;
document.head.appendChild(styleSheet);

function addSparkles(e) {
  for (let i = 0; i < 6; i++) {
    const sparkle = document.createElement("div");
    sparkle.setAttribute("style", sparkleStyle);
    sparkle.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
    sparkle.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => {
      if (sparkle && sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".give-button").forEach((btn) => {
    btn.addEventListener("click", addSparkles);
  });
});


export default CursorEffect;


// App.js
import React from "react";
import LandingPage from "./pages/LandingPage";
import BackgroundBubbles from "./components/BackgroundBubbles";
import CursorEffect from "./components/CursorEffect";
import ButtonHoverEffect from "./.devcontainer/components/ButtonHoverEffect";
import RotatingRing from "./.devcontainer/components/RotatingRing";
import HomePage from "./.devcontainer/components/HomePage";
import DonationBar from "./.devcontainer/components/donationbar";
import DonationFlow from "./.devcontainer/components/DonationFlow";
import DonationMenu from "./.devcontainer/components/DonationMenu";
import DropdownButton from "./.devcontainer/components/dropdownbutton";

function App() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundBubbles />
      <CursorEffect />
      <LandingPage />
      <ButtonHoverEffect />
      <RotatingRing />
      <HomePage />
      <DonationBar/>
      <DonationFlow/>
      <DonationMenu/>
      <DropdownButton/>



    </div>
  );
}

export default App;

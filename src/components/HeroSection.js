import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero.jpg"; // Adjust if your path differs

const HeroSection = () => {
  return (
    <div className="kclub-hero pt-3">
    <div className="kclub-flex">
      <div className="kclub-left">
          <span className="kclub-title">KCLUB</span>
        <h3>PIONEERING THE FUTURE OF<br />TECH TRANSFORMATION, TODAY</h3>
        <div className="kclub-locations">INDIA | UAE | USA | SINGAPORE</div>
      </div>
      <div className="kclub-right">
        <div className="kclub-image-wrapper">
          <img
            src={heroImage}
            alt="KClub Team"
            className="kclub-img"
          />
          {/* <div className="kclub-overlay"></div> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;

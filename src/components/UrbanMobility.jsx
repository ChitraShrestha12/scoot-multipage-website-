import React from "react";
import urbanImg from "../assets/Images/better-living.jpg"

function UrbanMobility() {
  return (
    <div className="benefit-card-another about-card">
      <div className="benefit-img about-img">
        <img src={urbanImg} alt="urban-img" />
      </div>
      <div className="benefit-description">
        <h1 className="benefit-title">Better urban living</h1>
        <p className="benefit-information about-info">
          We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.
        </p>
      </div>
    </div>
  );
}

export default UrbanMobility;

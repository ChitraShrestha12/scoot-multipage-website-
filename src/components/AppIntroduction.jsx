import React from "react";
import digitalEra from '../assets/Images/digital-era.jpg'
function AppIntroduction() {
  return (
    <>
      <div className="benefit-card about-card">
        <div className="benefit-description">
        <h1 className="benefit-title">Mobility for the digital era</h1>
        <p className="benefit-information about-info">
          Getting around should be simple (and even fun!) for everyone. We
          embrace technology to provide low cost, smart access to scooters at
          your fingertips.
        </p>
      </div>

      <div className="benefit-img about-img">
        <img src={digitalEra} alt="digital-era" />
      </div>
      </div>
    </>
  );
}

export default AppIntroduction;

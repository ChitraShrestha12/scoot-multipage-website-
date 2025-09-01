import React from "react";
import Button from "./Button";
import telemetryImg from "../assets/Images/telemetry.jpg";

function BenefitCard({benefitTitle,benefitInformation,benefitImg}) {
  return (
    <>
      <div className="benefit-description">
        <h1 className="benefit-title">{benefitTitle}</h1>
        <p className="benefit-information">
         {benefitInformation}
        </p>
        <Button btnName={"Learn More"} />
      </div>

      <div className="benefit-img">
        <img src={benefitImg} alt={benefitTitle}/>
      </div>
    </>
  );
}

export default BenefitCard;

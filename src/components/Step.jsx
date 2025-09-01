import React from "react";

function Step({
  guideImg,
  guideImgName,
  guideStepTitle,
  guideStepDescription,
}) {
  return (
    <>
      <div className="guide-step-img-section">
        <img src={guideImg} alt={guideImgName} />
      </div>
      <div className="guide-step-content">
        <h1 className="guide-step-title">{guideStepTitle}</h1>
        <p className="guide-step-description">{guideStepDescription}</p>
      </div>
    </>
  );
}

export default Step;

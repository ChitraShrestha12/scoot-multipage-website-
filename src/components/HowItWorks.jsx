import React from "react";
import Step from "./Step";
import { useInView } from "react-intersection-observer";
import stepData from "../data/stepData";

function HowItWorks() {
  return (
    <section className="how-it-works-section">
      {stepData.map((step, index) => {
        const { ref, inView } = useInView({triggerOnce:true});
        return (
          <div
            key={index}
            ref={ref}
            className={`guide-step ${inView ? "fade-in-left-step":""}`}
            style={{animationDelay:`${(index+1)*0.3}s`}}
          >
            <Step
              guideImg={step.img}
              guideImgName={step.imgName}
              guideStepTitle={step.title}
              guideStepDescription={step.description}
            />
          </div>
        );
      })}
    </section>
  );
}

export default HowItWorks;

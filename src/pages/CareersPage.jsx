import React, { useEffect, useState } from "react";
import careersMobileImg from "../assets/Images/careers-location-hero-mobile.jpg";
import careersTabletImg from "../assets/Images/careers-locations-hero-tablet.jpg";
import careersDesktopImg from "../assets/Images/careers-locations-hero-desktop.jpg";
import joinUsImg from "../assets/Images/join-us.jpg";
import Banner from "../components/Banner";
import BenefitCard from "../components/BenefitCard";
import MissionStatement from "../components/MissionStatement";
import jobVacancies from "../data/jobVacancy";
import { Link } from "react-router";

function CareersPage() {
  const [vacancy, setVacancy] = useState(jobVacancies);
  return (
    <>
      <section className="career-section">
        <div className="location-banner">
          <Banner
            tabletImg={careersTabletImg}
            mobileImg={careersMobileImg}
            desktopImg={careersDesktopImg}
          />
          <h2 className="location-title">Careers</h2>
        </div>
      </section>

      <section className="careers-content">
        <div className="benefit-card">
          <BenefitCard
            benefitTitle={"Care to jour our mission?"}
            benefitInformation={
              "We’re always looking for ambitious individuals to help us on our journey. If you’re  passionate about our mission to provide clean, accessible transport to improve urban  living we want to hear from you!"
            }
            benefitImg={joinUsImg}
            btnName={"Say Hello"}
          />
        </div>
      </section>

      <section className="main-values-container">
        <h1 className="value-title">Why join us?</h1>
        <MissionStatement />
      </section>

      {jobVacancies.map((job)=>{
        return(
          <section key={job.id} className="job-section">
        <div className="job-vacancy">
          <p className="job-title">{job.title}</p>
          <p className="job-location">{job.location}</p>
        </div>
        <button className="apply-btn">
          <Link to="/">Apply</Link>
        </button>
      </section>
        )
      })}
    </>
  );
}

export default CareersPage;

import React from "react";
import { Link, useParams } from "react-router";
import jobVacancies from "../data/jobVacancy";
import careersMobileImg from "../assets/Images/careers-location-hero-mobile.jpg";
import careersTabletImg from "../assets/Images/careers-locations-hero-tablet.jpg";
import careersDesktopImg from "../assets/Images/careers-locations-hero-desktop.jpg";
import Banner from "../components/Banner";

function JobInfo() {
  const { jobInfo } = useParams();
  const job = jobVacancies.find((j) => j.jobName === jobInfo);

  return (
    <>
      <section className="career-section">
        <div className="career-banner">
          <Banner
            tabletImg={careersTabletImg}
            mobileImg={careersMobileImg}
            desktopImg={careersDesktopImg}
          />
          <h1 className="career-title">Careers</h1>
        </div>
      </section>

      <section className="job-card">
        <h2>Job Information</h2>
        <table className="job-table">
          <tbody>
            <tr>
              <td className="key">Job Name</td>
              <td>{job.title}</td>
            </tr>
            <tr>
              <td className="key">Location</td>
              <td>{job.location}</td>
            </tr>
            <tr>
              <td className="key">Type</td>
              <td>{job.type}</td>
            </tr>
            <tr>
              <td className="key">Salary</td>
              <td>{job.salary}</td>
            </tr>
            <tr>
              <td className="key">Work Mode</td>
              <td>{job.workMode}</td>
            </tr>
            <tr>
              <td className="key">Experience</td>
              <td>{job.experience}</td>
            </tr>
            <tr>
              <td className="key">Description</td>
              <td>{job.description}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default JobInfo;

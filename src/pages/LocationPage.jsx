import React from "react";
import locationMobileImg from "../assets/Images/careers-location-hero-mobile.jpg";
import locationTabletImg from "../assets/Images/careers-locations-hero-tablet.jpg";
import worldMapImg from "../assets/Images/worldmap.png";
import locationDesktopImg from "../assets/Images/careers-locations-hero-desktop.jpg";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Footer from "../components/Footer";

function LocationPage() {
  return (
    <>
      <section className="location-section">
        <div className="location-banner">
          <Banner
            tabletImg={locationTabletImg}
            mobileImg={locationMobileImg}
            desktopImg={locationDesktopImg}
          />
          <h2 className="location-title">Location</h2>
        </div>
      </section>

      <section className="map-section-deatils">
        <div className="map-img">
          <img src={worldMapImg} alt="world-map" />
        </div>
      </section>

      <section className="scoot-request-section">
        <div className="scoot-request-heading"><h1>Your city not listed?</h1></div>
        <div className="scoot-request-content">
          <div className="scoot-request-description">
            <p>If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.</p>
          </div>
          <div className="request-btn"><Button btnName={"Message Us"} /></div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default LocationPage;

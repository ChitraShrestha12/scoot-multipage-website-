import React from "react";
import locationMobileImg from "../assets/Images/careers-location-hero-mobile.jpg";
import locationTabletImg from "../assets/Images/careers-locations-hero-tablet.jpg";
import locationDesktopImg from "../assets/Images/careers-locations-hero-desktop.jpg";
import Banner from "../components/Banner";

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
          
        </div>
      </section>
      </>
      
  );
}

export default LocationPage;

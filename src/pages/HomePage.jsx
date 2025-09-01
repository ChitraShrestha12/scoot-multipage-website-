import React from "react";
import HeroBanner from "../components/HeroBanner";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className="home-section fade-in-home" id="home">
      <HeroBanner />
      <HowItWorks />
      <Benefits/>
      <Footer/>
    </main>
  );
}

export default HomePage;

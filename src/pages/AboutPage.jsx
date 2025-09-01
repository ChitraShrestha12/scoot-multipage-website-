import React from "react";
import Banner from "../components/Banner";
import AppIntroduction from "../components/AppIntroduction";
import UrbanMobility from "../components/UrbanMobility";
import MissionStatement from "../components/MissionStatement";
import FaqContent from "../components/FaqContent";
import howItWorksFaqs from "../data/howItWorksFaqsData";
import { useInView } from "react-intersection-observer";
import safeDriving from "../data/safeDrivingData";
import Footer from "../components/Footer";
import aboutTabletImg from '../assets/Images/about-hero-tablet.jpg'
import aboutMobileImg from '../assets/Images/about-hero-mobile.jpg'
import aboutDesktopImg from '../assets/Images/about-hero-desktop.jpg'

function AboutPage() {
  return (
    <>
      <section className="about-section">
        <div className="about-banner">
          <Banner tabletImg={aboutTabletImg} mobileImg={aboutMobileImg} desktopImg={aboutDesktopImg}/>
          <h2 className="about-title">About</h2>
        </div>
      </section>

      <main className="about-content">
        <AppIntroduction />
        <UrbanMobility />
      </main>

      <section className="main-values-container">
        <h1 className="value-title">Our values</h1>
        <MissionStatement />
      </section>

      <section className="how-its-works-faqs">
        <h2 className="faqs-title">faqs</h2>
        <div className="faqs-section">
          <h2 className="faqs-section-title">How it works</h2>
          <div className="faqs-all">
            {howItWorksFaqs.map((worksData, index) => {
              const {ref, inView} = useInView({triggerOnce:true})
              return (
                <FaqContent
                myFaqRef={ref}
                myFaqInView={inView}
                  key={index}
                  faqContentQuestion={worksData.faqContentQuestion}
                  faqContentAnswer={worksData.faqContentAnswer}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="safe-driving">
        <div className="faqs-section">
          <h2 className="faqs-section-title">Safe driving</h2>
          <div className="faqs-all">
            {safeDriving.map((worksData, index) => {
              const {ref, inView} = useInView({triggerOnce:true})
              return (
                <FaqContent
                myFaqRef={ref}
                myFaqInView={inView}
                  key={index}
                  faqContentQuestion={worksData.faqQuestion}
                  faqContentAnswer={worksData.faqAnswer}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AboutPage;

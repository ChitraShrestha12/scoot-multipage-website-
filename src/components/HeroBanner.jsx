import React from 'react'
import desktopHeroImg from "../assets/Images/home-hero-desktop.jpg";
import mobileHeroImg from "../assets/Images/home-hero-mobile.jpg"
import tabletHeroImg from "../assets/Images/home-hero-tablet.jpg"
import lineImg from "../assets/Images/line.svg";
function HeroBanner() {
  return (
    <>
    <div className="hero-img-section">
        <picture>
          <source media="(max-width:767px)" srcSet={mobileHeroImg}/>
          <source media="(max-width:1024px)" srcSet={tabletHeroImg}/>
          <img src={desktopHeroImg} alt="hero-img" />
        </picture>
      </div>

      <section className="home-content-section">
        <div className="hero-title">
          <h1>Scooter sharing made simple</h1>
        </div>

        <div className="hero-content">
          <div className="line-img">
            <img src={lineImg} alt="line-img" />
          </div>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          
        </div>

        <button className="contact-link">
          Get Scootin
        </button>
      </section>
    </>
  )
}

export default HeroBanner
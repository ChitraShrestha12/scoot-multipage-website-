import React from "react";
import BenefitCard from "./BenefitCard";
import Button from "./Button";
import telemetryImg from "../assets/Images/telemetry.jpg";
import cityImg from "../assets/Images/near-you.jpg";
import paymentImg from "../assets/Images/payments.jpg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

function Benefits() {
  const { ref: refTelemetry, inView: isRefTelemetry } = useInView();
  const { ref: refCity, inView: isRefCity } = useInView();
  const { ref: refPayment, inView: isRefPayment } = useInView();
  return (
    <>
      <section>
        <div
          ref={refTelemetry}
          className={`benefit-card ${
            isRefTelemetry ? " benefit-fade-left" : ""
          }`}
        >
          <BenefitCard
            benefitTitle={"Easy to use ride telemetry"}
            benefitInformation={
              "The Scoot app is available with riding telemetry. This means it canshow you your average speed, how long you've been using the scooter,your traveling distance, and many more things all in an easy to use app."
            }
            benefitImg={telemetryImg}
            btnName={"Learn More"}
          />
        </div>
      </section>
      <section>
        <div
          ref={refCity}
          className={`benefit-card-another ${
            isRefCity ? "benefit-fade-right" : ""
          }`}
        >
          <div className="benefit-img">
            <img src={cityImg} alt="city-img" />
          </div>
          <div className="benefit-description">
            <h1 className="benefit-title">Coming to a city near you</h1>
            <p className="benefit-information">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <Link to="/about">
              <Button btnName={"Learn More"} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div
          ref={refPayment}
          className={`benefit-card ${isRefPayment ? " benefit-fade-left" : ""}`}
        >
          <BenefitCard
            benefitTitle={"Zero hassle payments"}
            benefitInformation={
              "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            }
            benefitImg={paymentImg}
            btnName={"Learn More"}
          />
        </div>
      </section>
    </>
  );
}

export default Benefits;

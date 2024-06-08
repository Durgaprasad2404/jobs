import React from "react";
import "./hero.css";
import HowItWorks from "../howitwork/HowItWorks";
import Workdone from "../Workdone";
import Testimonials from "../Testimonials";
import Guides from "../Guides";
import Footer from "../Footer";
import { Slide } from "react-awesome-reveal";
const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <Slide direction="left">
          <h1 className="hero-heading">
            <span className="hero-unlock">UNLOCK</span> your
            <br /> Potential
            <br />
            Find your perfect fit.
          </h1>
        </Slide>
      </div>

      <HowItWorks />
      <Workdone />
      <Testimonials />
      <Guides />
      <Footer />
    </>
  );
};

export default HeroSection;

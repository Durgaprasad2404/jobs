import React from "react";
import "./hrs.css";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function HrLanding() {
  return (
    <section className="Hrs-section">
      <Slide direction="left">
        <h1>
          We Help achieve <br />
          Your Biggest Goals
        </h1>
        <Link to="/HrDashBoard">
          <button>Connect With Experts</button>
        </Link>
      </Slide>
    </section>
  );
}

export default HrLanding;

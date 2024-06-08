import React from "react";
import "./freelancers.css";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function FreelancerLanding() {
  return (
    <>
      <section className="get-freelancers">
        <div className="freelancers-title-container">
          <Slide direction="left" cascade damping={0.3}>
            <h1 className="freelancer-heading">
              Find & Hire Expert Freelancer{" "}
            </h1>
            <p>
              Creative entrepreneurs navigating the gig economy with autonomy
              and versatility
            </p>
            <Link to="/FreelancersDashBoard">
              <button type="button" className="dashborad-btn">
                Get Freelancers
              </button>
            </Link>
          </Slide>
        </div>
      </section>
    </>
  );
}

export default FreelancerLanding;

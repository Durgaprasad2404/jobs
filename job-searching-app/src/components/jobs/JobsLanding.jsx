import React from "react";
import { Link } from "react-router-dom";
import "./jobs.css";
import image from "../../assets/bgs/getjobs.png";
import { Slide } from "react-awesome-reveal";

function JobsLanding() {
  return (
    <>
      <div className="get-jobs">
        <section className="jobs-section">
          <Slide direction="left">
            <div className="jobs-heading-container">
              <h1 className="jobs-heading">
                Find a Job According to Your
                <br /> <q className="interests">Interests</q> <br />&<br /> Your{" "}
                <q className="abilities">Abilities</q>.
              </h1>
            </div>
          </Slide>
          <Slide direction="up">
            <Link to="/jobsDashboard">
              <button type="button" className="dashborad-btn">
                Get Jobs Dashboard
              </button>
            </Link>
          </Slide>
        </section>
        <Slide direction="right">
          <div>
            <img src={image} alt="#" className="jobs-section-img" />
          </div>
        </Slide>
      </div>
    </>
  );
}

export default JobsLanding;

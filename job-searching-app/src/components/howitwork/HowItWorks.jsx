import React from "react";
import "./howitwork.css";
import image1 from "../../assets/howit/img1.png";
import image2 from "../../assets/howit/img2.png";
import image3 from "../../assets/howit/img3.png";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h1 className="how-it-heading">How It Works</h1>
      <div className="heading-line"></div>
      <div className="features">
        <div className="feature">
          <img src={image1} alt="#" className="feature-img" />
          <Link to="/jobsDashboard" style={{ textDecoration: "none" }}>
            <h5 className="feature-heading">Find Jobs</h5>
          </Link>
          <div className="howit-line"></div>
          <p className="line-clamp-3">
            a platform designed to connect job seekers with employment
            opportunities. Users can search for jobs based on various criteria
            such as location, industry, and job type. The platform often
            provides features like resume uploading, job alerts, and application
            tracking to streamline the job search process
          </p>
        </div>
        <div className="feature">
          <img src={image2} alt="#" className="feature-img" />
          <Link to="/FreelancersDashBoard" style={{ textDecoration: "none" }}>
            <h5 className="feature-heading">Find Freelancers</h5>
          </Link>
          <div className="howit-line"></div>
          <p className="line-clamp-3">
            Freelancers are self-employed individuals who offer their skills and
            services to clients on a project basis. They work independently and
            often remotely, providing services such as writing, graphic design,
            programming, marketing, and more
          </p>
        </div>
        <div className="feature">
          <img src={image3} alt="#" className="feature-img" />
          <Link to="/HrDashBoard" style={{ textDecoration: "none" }}>
            <h5 className="feature-heading">HR'S Connects</h5>
          </Link>
          <div className="howit-line"></div>
          <p className="line-clamp-3">
            "HR Connects" is a term often used to describe platforms, networks,
            or initiatives aimed at facilitating connections and interactions
            within the human resources (HR) community. These platforms can take
            various forms, including online forums, social media groups,
            professional associations, and conferences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

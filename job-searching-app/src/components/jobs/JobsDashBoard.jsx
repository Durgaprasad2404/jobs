import React from "react";
import "./jobsdashboard.css";

function JobsDashBoard() {
  const jobs = [
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
    {
      title: "Frontend-developer",
      type: "WFH",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo1.png",
    },
    {
      title: "Backend-developer",
      type: "Remote",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo2.png",
    },
    {
      title: "React-developer",
      type: "intern",
      company: "Company name",
      location: "Location-type",
      salary: "salary",
      logo: "logo3.png",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Explore opportunities</h2>
        <ul>
          <li>My Jobs</li>
          <li>Resume builder</li>
        </ul>
        <button className="post-job-btn">Post a job</button>
      </div>
      <div className="job-list">
        <h1>Jobs</h1>
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <img
              src={job.logo}
              alt={`${job.title} logo`}
              className="job-logo"
            />
            <div className="job-details">
              <h3 className="job-title">
                {job.title} <span className="job-type">- {job.type}</span>
              </h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="job-salary">{job.salary}</p>
            </div>
            <button className="remove-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsDashBoard;

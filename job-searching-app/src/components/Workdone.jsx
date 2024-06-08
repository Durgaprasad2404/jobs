import React from "react";
import girl from "../assets/bgs/girl.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Workdone() {
  return (
    <>
      <div className="work-done">
        <div>
          <h2 className="work-done-heading">
            Getting <span className="workdone-span-one">work done</span> <br />
            has never been <span className="workdone-span-two">Easier</span>
          </h2>
          <div>
            <ul className="works-list">
              <li>Get matched with expert freelancers in minutes.</li>
              <li>Get matched with Job Suits you in minutes.</li>
              <li>Guarantee and anti-fraud protection</li>
            </ul>
          </div>
          <div className="gets">
            <Link to="/find-jobs">
              <p className="get">
                Get Jobs <BsBoxArrowUpRight />
              </p>
            </Link>
            <Link to="find-freelancers">
              <p className="get">
                Get Freelancers <BsBoxArrowUpRight />
              </p>
            </Link>
          </div>
        </div>
        <div>
          <img src={girl} alt="#" className="workdone-image" />
        </div>
      </div>
    </>
  );
}

export default Workdone;

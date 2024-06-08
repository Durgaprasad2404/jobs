import React, { useState } from "react";
import "./navbar.css";
import { VscSignIn } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Slide direction="down" cascade damping={0.1}>
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Slide direction="down">
                  <li className="nav-link">Home</li>
                </Slide>
              </Link>
              <Link to="/find-jobs" style={{ textDecoration: "none" }}>
                <Slide direction="down">
                  <li className="nav-link">Find Jobs</li>
                </Slide>
              </Link>
              <Link to="/find-freelancers" style={{ textDecoration: "none" }}>
                <Slide direction="down">
                  <li href="#find-freelancers" className="nav-link">
                    Find Freelancers
                  </li>
                </Slide>
              </Link>
              <Link to="/connect-hrs" style={{ textDecoration: "none" }}>
                <Slide direction="down">
                  <li href="#connect-hrs" className="nav-link">
                    Connect with HR's
                  </li>
                </Slide>
              </Link>
            </ul>
          </Slide>
        </nav>
        <button className="login-button">
          Login <VscSignIn />
        </button>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </header>
    </>
  );
}

export default Navbar;

import React from "react";
import "./MobileNavbar.css";
import { Link } from "react-scroll";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <h2 id="logo">Portfolio.</h2>
          <ul>
            <li>
              <Link to="mainPage" spy={true} smooth={true} offset={-50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="workExperience" spy={true} smooth={true} offset={-100} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          <button id="hireMe-btn">Hire Me</button>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

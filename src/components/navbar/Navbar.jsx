import "./Navbar.css";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar.jsx";

function Navbar({tl, ease}) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // gsap code

  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
  let resume_btn = useRef(null);

  useEffect(()=>{
    tl.from([logo,resume_btn],1,{
      opacity: 0,
      y: -100,
    });
    tl.from([menu_item1, menu_item2, menu_item3, menu_item4], 1, {
      opacity: 0,
      x: -200,
      stagger:{
        amount: 1.2
      },
      ease: ease
    });
  });

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

      <div id="navbar">
        <h2 id="logo" ref={(el)=>(logo = el)}>ayush.</h2>
        <div id="navlinks">
          <ul>
            <li ref={(el)=>(menu_item1 = el)}>
              <Link to="mainPage" spy={true} smooth={true} offset={-50} duration={500}>
                Home
              </Link>
            </li>
            <li ref={(el)=>(menu_item2 = el)}>
              <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                Skills
              </Link>
            </li>
            <li ref={(el)=>(menu_item3 = el)}>
              <Link to="workExperience" spy={true} smooth={true} offset={-100} duration={500}>
                Projects
              </Link>
            </li>
            <li ref={(el)=>(menu_item4 = el)}>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          <button id="hireMe" ref={(el)=>(resume_btn = el)}>Resume</button>
        </div>
        <div className="menu-btn">
          {openMenu ? (
            <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
          ) : (
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

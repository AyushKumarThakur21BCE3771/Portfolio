import "./Mainpage.css";
import "../../App.css";
import React from "react";
import heroImg from "../../images/hero-img.jpg";
import reactjs from "../../images/reactjs.png";
import cpp from "../../images/cpp.png";
import mongodb from "../../images/mongodb.png";
import js from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import java from "../../images/java.png";
import email from "../../images/email.png";
import instagram from "../../images/instagram.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

function Mainpage() {
  return (
    <>
      <section className="hero-container" id="mainPage">
        <div className="hero-content">
          <h2 style={{ fontSize: "2.2rem", position: "relative", top: "50px" }}>
            Hi
          </h2>
          <h2>I'm Ayush</h2>
          <p style={{ fontSize: "1.2rem" }}>
            Welcome to my portfolio, I craft innovative solutions and transform
            ideas into reality. Explore the journey of a passionate software
            developer dedicated to building the future of technology.
          </p>
          
          <a href="https://docs.google.com/document/d/1I-zFhC8ThfdK_zuAc5YkCS2WOuE0pfus" target="blank" id="resume">Resume</a>
        </div>
        <div className="hero-img">
          <img src={heroImg} />
        </div>
        <div className="social-media-btn">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushkumar.thakur555@gmail.com">
            <img src={email} />
          </a>
          <a href="https://github.com/AyushKumarThakur21BCE3771">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/ayush-kumar-thakur-a3042624b">
            <img src={linkedin} />
          </a>
          <a href="https://www.instagram.com/ayusssh_5/">
            <img src={instagram} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Mainpage;

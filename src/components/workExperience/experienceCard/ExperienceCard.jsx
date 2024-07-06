import React from "react";
import "./ExperienceCard.css";
import link from "../../../images/link.png";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <div>
        <h6>{details.title}</h6>
        <a href={details.link} className="work-duration">
          <img src={link} />
        </a>
      </div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

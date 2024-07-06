import React from "react";
import './SkillCard.css';
import frontendImg from "../../../images/frontend.png";
import backendImg from "../../../images/backend.png";
import toolImg from "../../../images/tools.png";
import softSkillsImg from "../../../images/skill.png";

export default function SkillCard({title, icon, isActive, onClick}) {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={()=>onClick()}
    >
      <div className="skill-icon">
      <a href="https://imgbb.com/"><img src={icon} alt="frontend" border="0" /></a>
      </div>
      <span>{title}</span>
    </div>
  );
}

import React, { useState } from "react";
import "./Skills.css";
import "../../App.css";
import { SKILLS } from "../../utils/data.js";
import SkillCard from "./skillCard/SkillCard.jsx";
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard.jsx";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container scrollPopUP" id="skills">
      <h5>Technical Proficiency</h5>
      <div className="skills-content scrollPopUP">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import "./WorkExperience.css";
import "../../App.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./experienceCard/ExperienceCard";

const WorkExperience = () => {
  return (
    <div>
      <section className="experience-container scrollPopUP" id="workExperience">
        <h5>Projects</h5>
        <div className="experience-content">
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;

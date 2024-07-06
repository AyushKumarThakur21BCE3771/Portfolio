import React, { useRef } from "react";
import "./WorkExperience.css";
import "../../App.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./experienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () =>{
    sliderRef.current.slickNext();
  };
  const slideLeft = () =>{
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <section className="experience-container scrollPopUP" id="workExperience">
        <h5>Projects</h5>
        <div className="experience-content">
          <div className="arrow-right" onClick={slideRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="arrow-left" onClick={slideLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;

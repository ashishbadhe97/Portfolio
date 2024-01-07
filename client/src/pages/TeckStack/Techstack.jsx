import React from "react";
import "./Techstack.css";
import { techStackArray } from "../../utils/techStack";
import Fade from "react-reveal/Fade";

const Techstack = () => {
  return (
    <div className="conatiner techstack-container">
      <div className="techstack-section">
        <div className="techstack-title">
          <h2>Tech Stack</h2>
          <p>Technologies I have worked with</p>
        </div>
        <div className="techstack-cards-container">
          {techStackArray.map((tech, index) => {
            return (
              <Fade left>
                <div key={index + Math.trunc(Math.random())} className="tech-card js">
                  <img src={tech.imgPath} alt={tech.altName} />
                  <span>{tech.techName}</span>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techstack;

import React from "react";
import "./Techstack.css";

const Techstack = () => {
  return (
    <div className="conatiner techstack-container">
      <div className="techstack-section">
        <div className="techstack-title">
          <h2>Tech Stack</h2>
          <p>Technologies I have worked with</p>
        </div>
        <div className="techstack-cards-container">
          <div className="tech-card js">
            <img src="./svg/javascript.svg" alt="mySvgImage" />
            <span>JavaScript</span>
          </div>
          <div className="tech-card">
            <img src="./svg/typescript.svg" alt="mySvgImage" />
            <span>TypeScript</span>
          </div>
          <div className="tech-card">
            <img src="./svg/java.svg" alt="mySvgImage" />
            <span>Java</span>
          </div>
          <div className="tech-card">
            <img src="./svg/reactjs.svg" alt="mySvgImage" />
            <span>ReactJs</span>
          </div>
          <div className="tech-card">
            <img src="./svg/nextjs.svg" alt="mySvgImage" />
            <span>NextJs</span>
          </div>
          <div className="tech-card">
            <img src="./svg/reduxjs.svg" alt="mySvgImage" />
            <span>Redux</span>
          </div>
          <div className="tech-card">
            <img src="./svg/nodejs.svg" alt="mySvgImage" />
            <span>NodeJs</span>
          </div>
          <div className="tech-card">
            <img src="./svg/express.svg" alt="mySvgImage" />
            <span>ExpressJs</span>
          </div>
          <div className="tech-card">
            <img src="./svg/html.svg" alt="mySvgImage" />
            <span>HTML</span>
          </div>
          <div className="tech-card">
            <img src="./svg/css.svg" alt="mySvgImage" />
            <span>CSS</span>
          </div>

          <div className="tech-card">
            <img src="./svg/tailwind.svg" alt="mySvgImage" />
            <span>Tailwind Css</span>
          </div>
          <div className="tech-card">
            <img src="./svg/sass.svg" alt="mySvgImage" />
            <span>Sass</span>
          </div>
          <div className="tech-card">
            <img src="./svg/mongo.svg" alt="mySvgImage" />
            <span>MongoDB</span>
          </div>
          <div className="tech-card">
            <img src="./svg/material-ui.svg" alt="mySvgImage" />
            <span>Material UI</span>
          </div>
          <div className="tech-card">
            <img src="./svg/git.svg" alt="mySvgImage" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;

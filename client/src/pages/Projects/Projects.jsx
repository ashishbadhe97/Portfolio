import React from "react";
import "./Projects.css";
import { projects } from "../../utils/projects";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-section">
        <div className="project-title">
          <h2>Projects</h2>
          <p>Check out some of my work right here</p>
        </div>
        <div className="project-card-container">
          {projects.map((project, index) => {
            return (
              <Fade right>
                <div key={index} className="project-card">
                  <div className="project-img">
                    <img src={project.imgPath} alt={project.imgAltName} width="350px" height="230px" />
                  </div>

                  <div className="project-second-part">
                    <div className="project-heading">
                      <h3>{project.projectTitle}</h3>
                    </div>
                    <div className="project-info">
                      <p>{project.text}</p>
                    </div>
                    <div className="project-tech-stack">
                      <span>Tech Stack: </span>
                      <span>{project.technologies}</span>
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} title="github-link">
                        <img src="/svg/github.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

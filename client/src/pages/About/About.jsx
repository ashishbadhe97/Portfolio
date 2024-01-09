import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-profile-image">
          <img src="/images/my-image.jpeg" alt="Profile" />
        </div>
        <div className="about-details">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Experienced Full Stack Software Developer currently working towards a master's degree in Information Systems
            with a focus in software engineering at Northeastern University. Proficient in Java, JavaScript, ReactJs,
            Redux, NodeJs, and ExpressJs. Skilled in optimizing application performance by resolving bottlenecks and
            enhancing efficiency. Demonstrated expertise in seamlessly integrating new features into existing REST APIs,
            resulting in increased application value and reduced response time. Adept at conducting precise testing
            procedures, identifying and resolving issues, and collaborating closely with QA teams to uphold superior
            product quality. Enthusiastic about embracing new challenges and eager to contribute my skills to innovative
            software projects. Passionate about software development and committed to delivering high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

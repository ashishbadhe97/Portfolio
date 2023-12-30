import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = ({ toggle }) => {
  return (
    <div className={toggle ? "home-container" : "home-container untoggled"}>
      <div className="home-heading">
        <h2>Hello 👋 , my name is</h2>
        <h1>Ashish Badhe</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["I'm a Full Stack Developer !"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <button className="btn-hire">Hire Me</button>
        <button className="btn-resume">
          <a href="/docs/Ashish_Badhe_Resume.pdf" download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;

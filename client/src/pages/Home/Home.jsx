import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css"

const Home = ({ toggle }) => {
  return (
    <div className={ toggle ? "home-container" : "home-container untoggled" }>
      <div className="home-heading">
        <h2>Hello 👋 ,  my name is</h2>
        <h1>Ashish Badhe</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["I'm a Full Stack Developer!", "I'm a Front End Developer!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;

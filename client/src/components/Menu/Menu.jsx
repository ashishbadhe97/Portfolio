import React from "react";
import "./Menu.css";
import { FcHome, FcAbout, FcBullish, FcBiotech } from "react-icons/fc";
import { GrTechnology, GrContact } from "react-icons/gr";
import { IoSchoolSharp } from "react-icons/io5";


const Menu = ({ toggle }) => {
  return (
    <div>
      <div className="menu-image-div">
        <img className={toggle ? "untoggled-image" : "toggled-image"} src="/Image.jpeg" />
      </div>

      <div className="menu-icons-container">
        <div className="menu-icons">
          <FcHome size={25} title="Home" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>My Projects</span>
        </div>
        <div className="menu-icons">
          <FcAbout size={25} title="About" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>About</span>
        </div>
        <div className="menu-icons">
          <FcBullish size={25} title="Work Experience" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>
            Work Experience
          </span>
        </div>
        <div className="menu-icons">
          <GrTechnology size={25} color={"#E80909"} title="Tech Stack" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>Tech Stack</span>
        </div>
        <div className="menu-icons">
          <IoSchoolSharp size={25} color={"#1660C9"} title="Education" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>Education</span>
        </div>
        <div className="menu-icons">
          <FcBiotech size={25} color={"#1660C9"} title="Projects" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>Projects</span>
        </div>
        <div className="menu-icons">
          <GrContact size={25} color={"#E8C009"} title="Contact" />
          <span className={toggle ? "menu-icons-title" : "menu-icons-title menu-icons-title-toggled"}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;

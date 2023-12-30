import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import Menu from "../Menu/Menu";
import About from "../../pages/About/About";

const Layout = () => {
  const [sideNavToggle, setSideNavToggle] = useState(true);

  const handleSideNavToggle = () => {
    setSideNavToggle(!sideNavToggle);
  };

  return (
    <div className="layout-div">
      <div className={sideNavToggle ? "sidenav-section sidenav-toggled" : "sidenav-section"}>
        <div className="sidenav-toggle-icon" onClick={handleSideNavToggle}>
          <p>
            {sideNavToggle ? <MdOutlineKeyboardDoubleArrowLeft size={30} /> : <MdKeyboardDoubleArrowRight size={30} />}
          </p>
        </div>
        <Menu toggle={sideNavToggle} />
      </div>
      <div className={sideNavToggle ? "main-page-content main-page-content-toggled" : "main-page-content"}>
        <Home toggle={sideNavToggle} />
        <About />
        <About />
      </div>
    </div>
  );
};

export default Layout;

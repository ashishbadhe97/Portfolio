import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Home from "../../pages/Home/Home";
import "./Layout.css";

const Layout = () => {

  const [sideNavToggle, setSideNavToggle] = useState(true);

  const handleSideNavToggle = () => {
    setSideNavToggle(!sideNavToggle);
  }

  return (
    <div className="layout-div">
      <div className={ sideNavToggle ? "sidenav-section sidenav-toggled" : "sidenav-section"}>
        <div className="sidenav-toggle-icon" onClick={handleSideNavToggle}>
          <p>
            {sideNavToggle ? <MdOutlineKeyboardDoubleArrowLeft size={30} /> : <MdKeyboardDoubleArrowRight size={30} />}
          </p>
        </div>
      </div>
      <div className="main-page-conent">
        <Home />
      </div>
    </div>
  );
};

export default Layout;

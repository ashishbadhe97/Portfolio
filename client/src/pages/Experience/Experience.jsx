import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa6";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-section">
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Dec 2021 - Aug 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
            <h5 className="vertical-timeline-element-subtitle">Pune, India</h5>
            <div className="company-name">
              <i>Encora Inc.</i>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="May 2021 - Dec 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">Trainee Engineer</h3>
            <h5 className="vertical-timeline-element-subtitle">Pune, India</h5>
            <div className="company-name">
              <i>Encora Inc.</i>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

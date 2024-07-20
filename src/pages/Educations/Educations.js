import React from "react";
import { MdSchool } from "react-icons/md";
import "./educations.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2022 - 2025"
              iconStyle={{ background: "#138781", color: "black" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">B.E</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dr. D. Y. Patil College of Engineering Akurdi, Pune
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2022 - 2025"
              iconStyle={{ background: "#138781", color: "black" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">HSC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                R.P. College Dharashiv
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2022 - 2025"
              iconStyle={{ background: "#138781", color: "black" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">SSC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Jijamata Girls High School , Tuljapur
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;

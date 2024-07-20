import React from "react";
import "./about.css";
import mypic from "../../components/Images/laxmi-removebg.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={mypic} alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hello, my name is Laxmi Ashaba Sarade. I am a passionate and
              dedicated web developer with a strong background in the MERN
              stack. As a MERN developer enthusiast, I am deeply committed to
              mastering and contributing to the development ecosystem
              surrounding these technologies. Over the past few years, I've
              worked on several projects that have helped me hone my skills in
              full-stack development. I have a strong aptitude for
              problem-solving. I have solved over 300 questions in data
              structures and algorithms, which has significantly improved my
              logical thinking and coding efficiency. This experience has also
              equipped me to tackle complex technical challenges effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

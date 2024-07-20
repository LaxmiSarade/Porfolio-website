import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonFill size={30} />
          ) : (
            <FaSun size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hii 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer !", "Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9552791795"
                rel="noreferrer"
                target="_blanl"
              >
                Hire Me
              </a>

              <a
                className="btn btn-cv"
                href={Resume}
                download="Laxmi_Sarade.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;

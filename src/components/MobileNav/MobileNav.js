import React, { useState } from "react";
import "./mobileNav.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { AiOutlineMenuFold } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handleOpen
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">Laxmi Sarade</span>
        </div>

        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;

import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className=" project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          nulla accusamus perspiciatis iste sed officia nemo mollitia explicabo,
          sunt, dolorum maxime vero corrupti?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur nulla accusamus perspiciatis
          iste sed officia nemo mollitia explicabo, sunt, dolorum maxime
          veadipisicing elit. Consectetur nulla accusamus perspiciatis iste sed
          officia nemo mollitia explicabo, sunt, doloru
        </p>
        {/*card design */}

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Techinfoyt Shopping Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Techinfoyt Shopping Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Techinfoyt Shopping Website
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

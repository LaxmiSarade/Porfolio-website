import React from "react";
import "./contact.css";
import pic from "../../assets/images/contact.jpg";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-lg-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={pic} alt="Contact" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 className>
                      Contact with
                      <GrLinkedin color="blue" size={30} className="ms-4" />
                      <FaGithub color="black" size={30} className="ms-4" />
                      <BsInstagram
                        color="Hex: #bc2a8d
                        RGB: 188, 42, 141"
                        size={30}
                        className="ms-4"
                      />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Enter your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3 ">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

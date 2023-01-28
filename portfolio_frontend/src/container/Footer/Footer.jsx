import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeInput(e) {
    const { name, type, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    setIsLoading(true);
    setIsSubmitted(true);
  }

  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer">
        <div className="app__footer-cardList">
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a className="anchor p-text" href="tel: +91 9517405762">
              Contact via mobile
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a
              className="anchor p-text"
              href="mailto: abhidevelops572@gmail.com"
            >
              abhidevelops572@gmail.com
            </a>
          </div>
        </div>

        {!isSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                name="name"
                className="p-text"
                type="text"
                placeholder="Your Name"
                onChange={handleChangeInput}
                value={formData.name}
              />
            </div>
            <div className="app__flex">
              <input
                name="email"
                className="p-text"
                type="email"
                placeholder="Your Email"
                onChange={handleChangeInput}
                value={formData.email}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                name="message"
                onChange={handleChangeInput}
                value={formData.message}
                placeholder="Your Message"
              />
            </div>
            <button className="p-text" onClick={handleSubmit}>
              {isLoading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div className="form-submit-success-msg">
            <h4 className="head-text">
              <span> Thank you </span>
              <br /> for getting in touch!
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default AppWrap(Footer, "contact");

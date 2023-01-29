import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
import { motion } from "framer-motion";

import { addDoc } from "firebase/firestore";
import { db, collectionRef } from "../../client";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  function handleChangeInput(e) {
    const { name, type, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    //form validation (using regex)
    const { name, email, message } = formData;
    let msg = message;
    if (!name || !email || !message) {
      window.alert("One or more fields are empty!");
    } else if (/\d/.test(name)) {
      window.alert("Name should contain alphabets only");
    } else if (!msg.replace(/\s/g, "").length) {
      window.alert("You have not typed any message for me!");
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      window.alert("Please provide a valid email");
    } else {
      //submit the data to the database
      setIsSubmitted(true);
      addDoc(collectionRef, {
        ...formData,
      });

      setFormData({ name: "", email: "", message: "" });
    }
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
          <form className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                name="name"
                className="p-text form-element"
                type="text"
                placeholder="Your Name"
                onChange={handleChangeInput}
                value={formData.name}
                required
              />
            </div>
            <div className="app__flex">
              <input
                name="email"
                className="p-text form-element"
                type="email"
                placeholder="Your Email"
                onChange={handleChangeInput}
                value={formData.email}
                required
              />
            </div>
            <div>
              <textarea
                className="p-text form-element"
                name="message"
                onChange={handleChangeInput}
                value={formData.message}
                placeholder="Your Message"
                required
              />
            </div>
            <button className="p-text" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        ) : (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delayChildren: 0.5,
            }}
            className="form-submit-success-msg"
          >
            <h4 className="head-text">
              <span> Thank you </span>
              <br /> for getting in touch!
            </h4>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default AppWrap(Footer, "contact");

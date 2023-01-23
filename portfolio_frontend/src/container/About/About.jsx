import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import {images } from '../../constants'

const abouts = [
  {
    title: "Web Developer",
    description: "I am a fresher web developer",
    imgUrl: images.about01,
  },
  {
    title: "Web Designer",
    description: "I am a fresher web developer",
    imgUrl: images.about02,
  },
  {
    title: "Web Analyst",
    description: "I am a fresher web developer",
    imgUrl: images.about03,
  },
];
export default function About() {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Development </span> <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
                // style={{margin: '15px auto'}}
              whileInView={{ opaicty: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title+index}
            >
                <img src={about.imgUrl} alt="about-img" />
                <h2 style={{marginTop:'15px'}} className="bold-text">{about.title}</h2>
                <p style={{marginTop:'10px'}} className="p-text">{about.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

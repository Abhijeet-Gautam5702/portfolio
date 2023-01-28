import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../constants";

import "./Work.scss";

const tempUrl = "https://github.com/Abhijeet-Gautam5702";

const projects = [
  {
    title: "Interactive Comments Section",
    url: tempUrl,
    img: images.about01,
  },
  {
    title: "Job Portal UI",
    url: tempUrl,
    img: images.about02,
  },
  {
    title: "Codechef Archive Chrome Extension",
    url: tempUrl,
    img: images.about03,
  },
];

function Work() {
  return (
    <>
      <h2 className="head-text">
        Have a look at
        <span> my projects </span>
      </h2>
      <div
        // whileInView={{ opacity: [0, 1] }}
        // transition={{ duration: 0.5, ease: "easeIn" }}
        className="app__work-portfolio"
      >
        {projects.map((project, index) => {
          return (
            <a href={project.url} className="anchor" target="_blank">
              <motion.div
                whileInView={{y:[40,0],opacity:[0,1]}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className="app__work-portfolio-item"
              >
                <img src={project.img} alt="project_img" />
                <h2 className="bold-text">{project.title}</h2>
              </motion.div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default AppWrap(Work, "work");

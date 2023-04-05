import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { images } from "../../constants";

import "./Work.scss";

const tempUrl = "https://github.com/Abhijeet-Gautam5702";

const projects = [
  {
    title: "Restro",
    url: "https://github.com/Abhijeet-Gautam5702/restaurant-website",
    img: images.restro,
  },
  {
    title: "Codechef Archive",
    url: "https://github.com/Abhijeet-Gautam5702/codechef-archive",
    img: images.ccarchive,
  },
  {
    title: "My Notes",
    url: "https://github.com/Abhijeet-Gautam5702/my-notes-app",
    img: images.mynotes,
  },
  {
    title: "Comments Section",
    url: "https://github.com/Abhijeet-Gautam5702/interactive-comments-section",
    img: images.commentsection,
  },
  {
    title: "Job Board",
    url: "https://github.com/Abhijeet-Gautam5702/job-listing-portal",
    img: images.jobportal,
  },
  {
    title: "Landing Page",
    url: "https://github.com/Abhijeet-Gautam5702/satvik-tourism",
    img: images.satviktourism,
  },
  {
    title: "Gamify Login",
    url: "https://github.com/Abhijeet-Gautam5702/multistep-form",
    img: images.loginpage,
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
            <a
              href={project.url}
              className="anchor"
              target="_blank"
              key={index}
            >
              <motion.div
                whileInView={{ y: [40, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className="app__work-portfolio-item"
              >
                <img src={project.img} alt="project_img" />
                <h2>{project.title}</h2>
              </motion.div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default AppWrap(Work, "work");

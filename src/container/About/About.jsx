import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
// import {client,urlFor} from '../../client'

const abouts = [
  {
    title: "Web Developer",
    description: "I love building chrome extensions and landing pages",
    imgUrl: images.about01,
  },
  {
    title: "Web Designer",
    description: "I am proficient in designing visually appealing web designs",
    imgUrl: images.about02,
  },
  {
    title: "Problem Solver",
    description: "I love solving problems related to Data Structures and Algorithms",
    imgUrl: images.about03,
  },
];

function About() {
  // const [abouts,setAbouts] = useState([])

  // useEffect(()=>{
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query)
  //     .then(data => setAbouts(data))
  // },[])

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
              transition={{ duration: 0.3 }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt="about-img" />
              <h2 style={{ marginTop: "15px" }} className="bold-text">
                {about.title}
              </h2>
              <p style={{ marginTop: "10px" }} className="p-text">
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
export default AppWrap(About, "about");
// export default About;

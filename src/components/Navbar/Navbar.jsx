import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const navElements = ["home", "about", "work", "skills", "contact"].map(
  (item) => {
    return (
      <li className="app__flex p-text" key={item}>
        <div />
        <a href={`#${item}`}>{item}</a>
      </li>
    );
  }
);

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h2>
          <span>abhi</span>
          <span>jeet</span>
        </h2>
      </div>
      <ul className="app__navbar-links">{navElements}</ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: ["70vw", "0vw"] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => {
                return (
                  <li key={`menu-${item}`}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

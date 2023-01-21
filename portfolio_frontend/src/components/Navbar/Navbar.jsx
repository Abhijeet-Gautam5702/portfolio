import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navElements = ["home", "work", "skills", "contact", "about"].map(
    (item) => {
      return (
        <li className="app__flex p-text" key={item}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      );
    }
  );

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">{navElements}</ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "work", "skills", "contact", "about"].map((item) => {
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

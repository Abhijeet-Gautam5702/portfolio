import React from "react";
import "./Skills.scss";
import { AppWrap } from "../../Wrapper";
import { images } from "../../constants";

const skills = [
  {
    logo: images.javascript,
    title: "Javascript",
  },
  {
    logo: images.cpp,
    title: "C++",
  },
  {
    logo: images.css,
    title: "CSS",
  },
  {
    logo: images.git,
    title: "Git",
  },
  {
    logo: images.html,
    title: "HTML5",
  },
  {
    logo: images.react,
    title: "React",
  },
  {
    logo: images.sass,
    title: "Saas",
  },
  {
    logo: images.python,
    title: "Python",
  },
];
function Skills() {
  return (
    <>
      <h2 className="head-text">
        These are my
        <span> skills </span>
      </h2>
      <div className="app__flex app__skills-container">
        {skills.map((skill, index) => {
          return (
            <div className="app__skills-item">
              <div className="app__skills-img-container">
                <img src={skill.logo} alt="skill_logo" />
              </div>
              <p className="p-text">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AppWrap(Skills, "skills");

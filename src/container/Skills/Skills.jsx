import React from "react";
import "./Skills.scss";
import { AppWrap } from "../../Wrapper";
import { images } from "../../constants";

const skills = [
  {
    logo: images.html,
    title: "HTML5",
  },
  {
    logo: images.css,
    title: "CSS",
  },
  {
    logo: images.sass2,
    title: "Saas",
  },
  {
    logo: images.tailwind,
    title: "Tailwind CSS",
  },
  {
    logo: images.javascript,
    title: "Javascript",
  },
  {
    logo: images.typescript,
    title: "TypeScript",
  },
  {
    logo: images.react,
    title: "React",
  },
  {
    logo: images.next2,
    title: "Next",
  },
  {
    logo: images.redux,
    title: "Redux",
  },
  {
    logo: images.cpp,
    title: "C++",
  },
  {
    logo: images.flutter,
    title: "Flutter",
  },
  {
    logo: images.git,
    title: "Git",
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
            <div className="app__skills-item" key={index}>
              <div className="app__skills-img-container app__flex">
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

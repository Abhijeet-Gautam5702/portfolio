import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://twitter.com/abhijeet_gautam" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://github.com/Abhijeet-Gautam5702" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/abhijeet-gautam-a413b1211/"
        target="_blank"
      >
        <div>
          <ImLinkedin2 />
        </div>
      </a>
    </div>
  );
}

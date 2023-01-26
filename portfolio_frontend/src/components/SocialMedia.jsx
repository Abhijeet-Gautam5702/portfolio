import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/abhijeet_gautam" target='_blank'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

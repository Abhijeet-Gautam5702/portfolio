import React from "react";
import { NavigationDots, SocialMedia } from "../components";

function AppWrap(Component, idName, classNames) {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <div className="app__navigation">
          <NavigationDots active={idName} />
        </div>
      </div>
    );
  };
}

export default AppWrap;

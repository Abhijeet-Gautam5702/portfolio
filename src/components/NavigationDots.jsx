import React from "react";

export default function SocialMedia({ active }) {
  return ["home","about", "work", "skills", "contact"].map((item, index) => {
    return (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === true ? { backgroundColor: "#313BAC" } : {}}
      />
    );
  });
}

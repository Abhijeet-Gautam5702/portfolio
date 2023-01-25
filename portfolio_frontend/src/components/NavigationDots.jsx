import React from "react";

export default function SocialMedia({ active }) {
  return ["home", "work", "skills", "contact", "about"].map((item, index) => {
    return (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation"
        style={active === true ? { backgroundColor: "#313BAC" } : {}}
      />
    );
  });
}

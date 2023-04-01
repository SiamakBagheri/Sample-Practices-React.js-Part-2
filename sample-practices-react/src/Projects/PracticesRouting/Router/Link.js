import React from "react";

const Link = ({ to, children }) => {
  function handleClick(e) {
    e.preventDefualt();
    window.history.pushState({}, "", to);
  }

  return (
    <a href={to} handleClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;

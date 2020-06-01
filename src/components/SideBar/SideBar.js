import React from "react";

import useHover from "../../hooks/useHover";

import "./SideBar.css";

const SideBar = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <div className={`${isHovered ? "sideBarOverlay" : null}`}></div>
      <nav className="sideBarContainer" ref={hoverRef}>
        <ul></ul>
      </nav>
    </>
  );
};
export default SideBar;

import React from "react";

import SideBarItem from "../SideBarItem/SideBarItem";
import items from "./items";

import useHover from "../../hooks/useHover";

import "./SideBar.css";

const SideBar = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <div className={`${isHovered ? "sideBarOverlay" : null}`}></div>
      <nav className="sideBarContainer" ref={hoverRef}>
        <ul>
          {items.map((item) => {
            return (
              <SideBarItem
                key={item.id}
                text={item.text}
                icon={item.icon}
                to={item.to}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;

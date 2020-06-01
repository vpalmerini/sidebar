import React from "react";

import "./SideBarItem.css";

const SideBarItem = ({ icon, text, to, hover }) => {
  return (
    <li className="itemContainer">
      <a className="itemLink" href={to}>
        <div>
          <span>
            <i className={icon}></i>
          </span>
        </div>
        <div className={`itemText ${hover ? `itemTextHover` : null}`}>
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
};
export default SideBarItem;

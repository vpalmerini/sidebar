import React from "react";

import "./SideBarItem.css";

const SideBarItem = ({ icon, text, to }) => {
  return (
    <li className="itemContainer">
      <a className="itemLink" href={to}>
        <div>
          <span>
            <i className={icon}></i>
          </span>
        </div>
        <div className="itemText">
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
};
export default SideBarItem;

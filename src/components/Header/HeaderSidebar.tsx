import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss'

const HeaderSidebar: React.FC = () => {
  const Cross: string = require("../../img/sidebar/cross.webp");
  const Logo: string = require("../../img/home/logo.webp");

  return (
    <>
      <nav className="header__sidebar">
        <div className="header__sidebar-container">
          <img className="header__sidebar-logo" src={Logo} alt="logo"></img>
        </div>
      </nav>
      <nav className="header__sidebar-cross">
        <NavLink to="/home" className="header__sidebar-link">
          <img
            className="header__sidebar-cross__img"
            src={Cross}
            alt="cross"
          ></img>
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderSidebar;
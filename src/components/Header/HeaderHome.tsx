import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const HeaderHome: React.FC = () => {
  return (
    <header className="header__home">
      <NavLink to="/sidebar" className="header__container">
        <nav className="header__burger-top"></nav>
        <nav className="header__burger-between"></nav>
        <nav className="header__burger-bottom"></nav>
      </NavLink>
    </header>
  );
};

export default HeaderHome;

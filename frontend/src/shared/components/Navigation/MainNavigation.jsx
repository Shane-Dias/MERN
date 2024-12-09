import React from "react";
import "./MainNavigation.css";
import "./MainHeader";
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title"><Link to={"/"}>Logo</Link></h1>
      <nav>
        ....
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;

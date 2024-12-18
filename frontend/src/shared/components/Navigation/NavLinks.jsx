import React, { useContext } from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const NavLinks = (props) => {
  const auth_obj = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to={"/"}>ALL USERS</NavLink>
      </li>
      {auth_obj.isLoggedin && (
        <li>
          <NavLink to={"/u1/places"}>YOUR PLACES</NavLink>
        </li>
      )}
      {auth_obj.isLoggedin && (
        <li>
          <NavLink to={"/places/new"}>ADD PLACE</NavLink>
        </li>
      )}
      {!auth_obj.isLoggedin && (
        <li>
          <NavLink to={"/auth"}>LOGIN</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

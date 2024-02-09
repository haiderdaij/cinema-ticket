import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "./logo.svg";

function Logo() {
  return (
    <NavLink to={"/"} className="h-16">
      <img
        src={LogoImage}
        alt="Logo"
        className="h-full w-full cursor-pointer"
      />
    </NavLink>
  );
}

export default Logo;

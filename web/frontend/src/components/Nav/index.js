import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
          <a href="#">
            <h1>Say Their Names</h1>
          </a>
      </div>
      <div className="navbar__links">
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Nav;

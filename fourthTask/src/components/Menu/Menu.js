import React from "react";

import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const style = {
    fontWeight: "bold",
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={style}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={style}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeStyle={style}>
            Movies List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

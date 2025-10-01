import React from "react";
import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Mobiles",
      path: "/mobiles",
    },
    {
      name: "Laptops",
      path: "/laptops",
    },
    {
      name: "Users",
      path: "/users/all",
    },
    {
      name: "Users - 2",
      path: "/users-2",
    },
  ];

  return (
    <nav>
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.path}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;

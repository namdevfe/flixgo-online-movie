import PATHS from "@/constants/path";
import React from "react";
import { NavLink } from "react-router-dom";

const isActiveStyle = "header__nav-link header__nav-link--active";
const defaultStyle = "header__nav-link";
const MENUS = [
  {
    path: PATHS.HOME,
    title: "Home",
  },
  {
    path: PATHS.MOVIES.INDEX,
    title: "Movies",
  },
  {
    path: PATHS.FAQ,
    title: "Faq",
  },
  {
    path: PATHS.ABOUT,
    title: "About",
  },
];

const Navbar = () => {
  return (
    <ul className="header__nav">
      {MENUS.map((menu, index) => {
        return (
          <li key={new Date().getTime + index} className="header__nav-item">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? isActiveStyle : defaultStyle
              }
              to={menu.path}
            >
              {menu.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;

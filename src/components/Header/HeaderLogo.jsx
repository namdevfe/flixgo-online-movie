import PATHS from "@/constants/path";
import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={PATHS.HOME} className="header__logo">
      <img src="/img/logo.svg" alt="flixgo-logo" />
    </Link>
  );
};

export default HeaderLogo;

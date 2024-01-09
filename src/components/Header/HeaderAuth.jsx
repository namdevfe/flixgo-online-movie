import PATHS from "@/constants/path";
import React from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <div className="header__auth">
      <button className="header__search-btn" type="button">
        <i className="icon ion-ios-search" />
      </button>
      <Link to={PATHS.LOGIN} className="header__sign-in">
        <i className="icon ion-ios-log-in" />
        <span>sign in</span>
      </Link>
    </div>
  );
};

export default HeaderAuth;

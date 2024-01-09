import React from "react";
import HeaderLogo from "./HeaderLogo";
import Navbar from "../Navbar";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  <HeaderLogo />
                  <Navbar />
                  <HeaderAuth />
                  {/* header menu btn */}
                  <button className="header__btn" type="button">
                    <span />
                    <span />
                    <span />
                  </button>
                  {/* end header menu btn */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header search */}
        <form action="#" className="header__search">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__search-content">
                  <input
                    type="text"
                    placeholder="Search for a movie, TV Series that you are looking for"
                  />
                  <button type="button">search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* end header search */}
      </header>
      ;
    </div>
  );
};

export default Header;

import React from "react";

const Page404 = () => {
  return (
    <div className="page-404 section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-404__wrap">
              <div className="page-404__content">
                <h1 className="page-404__title">404</h1>
                <p className="page-404__text">
                  The page you are looking for not available!
                </p>
                <a href="index.html" className="page-404__btn">
                  go back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;

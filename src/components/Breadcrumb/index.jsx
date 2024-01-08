import React from "react";

const Breadcrumb = () => {
  return (
    <section
      className="section section--first section--bg"
      data-bg="img/section/section.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__wrap">
              {/* section title */}
              <h2 className="section__title">About Us</h2>
              {/* end section title */}
              {/* breadcrumb */}
              <ul className="breadcrumb">
                <li className="breadcrumb__item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                  About Us
                </li>
              </ul>
              {/* end breadcrumb */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;

import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const MoviesPage = () => {
  return (
    <div>
      {/* filter */}
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter__content">
                <div className="filter__items">
                  {/* filter item */}
                  <div className="filter__item" id="filter__genre">
                    <span className="filter__item-label">GENRE:</span>
                    <div
                      className="filter__item-btn dropdown-toggle"
                      role="navigation"
                      id="filter-genre"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <input type="button" defaultValue="Action/Adventure" />
                      <span />
                    </div>
                    <ul
                      className="filter__item-menu dropdown-menu scrollbar-dropdown"
                      aria-labelledby="filter-genre"
                    >
                      <li>Action/Adventure</li>
                      <li>Animals</li>
                      <li>Animation</li>
                      <li>Biography</li>
                      <li>Comedy</li>
                      <li>Cooking</li>
                      <li>Dance</li>
                      <li>Documentary</li>
                      <li>Drama</li>
                      <li>Education</li>
                      <li>Entertainment</li>
                      <li>Family</li>
                      <li>Fantasy</li>
                      <li>History</li>
                      <li>Horror</li>
                      <li>Independent</li>
                      <li>International</li>
                      <li>Kids</li>
                      <li>Kids &amp; Family</li>
                      <li>Medical</li>
                      <li>Military/War</li>
                      <li>Music</li>
                      <li>Musical</li>
                      <li>Mystery/Crime</li>
                      <li>Nature</li>
                      <li>Paranormal</li>
                      <li>Politics</li>
                      <li>Racing</li>
                      <li>Romance</li>
                      <li>Sci-Fi/Horror</li>
                      <li>Science</li>
                      <li>Science Fiction</li>
                      <li>Science/Nature</li>
                      <li>Spanish</li>
                      <li>Travel</li>
                      <li>Western</li>
                    </ul>
                  </div>
                  {/* end filter item */}
                  {/* filter item */}
                  <div className="filter__item" id="filter__quality">
                    <span className="filter__item-label">QUALITY:</span>
                    <div
                      className="filter__item-btn dropdown-toggle"
                      role="navigation"
                      id="filter-quality"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <input type="button" defaultValue="HD 1080" />
                      <span />
                    </div>
                    <ul
                      className="filter__item-menu dropdown-menu scrollbar-dropdown"
                      aria-labelledby="filter-quality"
                    >
                      <li>HD 1080</li>
                      <li>HD 720</li>
                      <li>DVD</li>
                      <li>TS</li>
                    </ul>
                  </div>
                  {/* end filter item */}
                  {/* filter item */}
                  <div className="filter__item" id="filter__rate">
                    <span className="filter__item-label">IMBd:</span>
                    <div
                      className="filter__item-btn dropdown-toggle"
                      role="button"
                      id="filter-rate"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="filter__range">
                        <div id="filter__imbd-start" />
                        <div id="filter__imbd-end" />
                      </div>
                      <span />
                    </div>
                    <div
                      className="filter__item-menu filter__item-menu--range dropdown-menu"
                      aria-labelledby="filter-rate"
                    >
                      <div id="filter__imbd" />
                    </div>
                  </div>
                  {/* end filter item */}
                  {/* filter item */}
                  <div className="filter__item" id="filter__year">
                    <span className="filter__item-label">RELEASE YEAR:</span>
                    <div
                      className="filter__item-btn dropdown-toggle"
                      role="button"
                      id="filter-year"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="filter__range">
                        <div id="filter__years-start" />
                        <div id="filter__years-end" />
                      </div>
                      <span />
                    </div>
                    <div
                      className="filter__item-menu filter__item-menu--range dropdown-menu"
                      aria-labelledby="filter-year"
                    >
                      <div id="filter__years" />
                    </div>
                  </div>
                  {/* end filter item */}
                </div>
                {/* filter btn */}
                <button className="filter__btn" type="button">
                  apply filter
                </button>
                {/* end filter btn */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end filter */}
      {/* catalog */}
      <div className="catalog">
        <div className="container">
          <div className="row">
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    8.4
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover2.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.1
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover3.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Whitney</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Romance</a>
                    <a href="#">Drama</a>
                    <a href="#">Music</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    6.3
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover4.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Blindspotting</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                    <a href="#">Drama</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.9
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover5.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    8.4
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover6.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.1
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover6.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Whitney</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Romance</a>
                    <a href="#">Drama</a>
                    <a href="#">Music</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    6.3
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover5.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Blindspotting</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                    <a href="#">Drama</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.9
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover4.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    8.4
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover3.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.1
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover2.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Whitney</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Romance</a>
                    <a href="#">Drama</a>
                    <a href="#">Music</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    6.3
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Blindspotting</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                    <a href="#">Drama</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.9
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* paginator */}
            <div className="col-12">
              <ul className="paginator">
                <li className="paginator__item paginator__item--prev">
                  <a href="#">
                    <i className="icon ion-ios-arrow-back" />
                  </a>
                </li>
                <li className="paginator__item">
                  <a href="#">1</a>
                </li>
                <li className="paginator__item paginator__item--active">
                  <a href="#">2</a>
                </li>
                <li className="paginator__item">
                  <a href="#">3</a>
                </li>
                <li className="paginator__item">
                  <a href="#">4</a>
                </li>
                <li className="paginator__item paginator__item--next">
                  <a href="#">
                    <i className="icon ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
            </div>
            {/* end paginator */}
          </div>
        </div>
      </div>
      {/* end catalog */}
      {/* expected premiere */}
      <section
        className="section section--bg"
        data-bg="img/section/section.jpg"
      >
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <h2 className="section__title">Expected premiere</h2>
            </div>
            {/* end section title */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    8.4
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover3.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.1
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover2.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Whitney</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Romance</a>
                    <a href="#">Drama</a>
                    <a href="#">Music</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    6.3
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover6.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Blindspotting</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                    <a href="#">Drama</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.9
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover4.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    8.4
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* card */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card">
                <div className="card__cover">
                  <img src="img/covers/cover5.jpg" alt />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play" />
                  </a>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                  <span className="card__rate">
                    <i className="icon ion-ios-star" />
                    7.1
                  </span>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* section btn */}
            <div className="col-12">
              <a href="#" className="section__btn">
                Show more
              </a>
            </div>
            {/* end section btn */}
          </div>
        </div>
      </section>
      {/* end expected premiere */}
    </div>
  );
};

export default MoviesPage;

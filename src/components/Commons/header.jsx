import React, { useState, useEffect } from "react";
import logo from "../../assets/img/cheapcars.png";
const Header = (props) => {
  const [checked, setChecked] = useState(false);

  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scrollHeight = window.pageYOffset;
      if (scrollHeight > 300) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });
  }, []);
  return (
    <header
      className={`header  ${showHeader ? "header--sticky" : ""}`}
    >
      <figure className="header__logo">
        <a href="/">
          <img src={logo} alt="Logo" className="header__logo__img" />
        </a>
      </figure>

      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <a href="/" className="header__nav__link">
              <i className="fa fa-user"></i> <span>Log In</span>
            </a>
          </li>
          <li className="header__nav__item">
            <a href="/" className="header__nav__link">
              <i className="fa fa-user"></i> <span>Register</span>
            </a>
          </li>
        </ul>
        <div className="region__city__button">
          <button className="post-ad region__city__button--header">
            <i className="post-ad__icon fa fa-plus-circle"></i> Post Ad FREE
          </button>
        </div>
      </nav>

      <nav className="header__nav__mobile">
        <input
          type="checkbox"
          className="header__nav__mobile__checkbox"
          id="nav-mobile"
          checked={checked}
        />
        <label
          htmlFor="nav-mobile"
          className="header__nav__mobile__label"
          onClick={() => setChecked(!checked)}
        >
          <button className="header__nav__mobile__button"></button>
        </label>

        <ul className="header__nav__mobile__list">
          <div className="region__city__button">
            <button className="post-ad region__city__button--login">
              <i className="post-ad__icon fa fa-plus-circle"></i> Login
            </button>
          </div>
          <div className="region__city__button">
            <button className="post-ad region__city__button--smallest-screen">
              <i className="post-ad__icon fa fa-plus-circle"></i> Post Ad FREE
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

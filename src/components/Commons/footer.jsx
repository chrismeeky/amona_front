import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav__title">About Us</div>
        <ul className="footer__nav__list">
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              About Us
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              News & Blog
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              FAQ
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Anti-Scam
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Privacy
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav">
        <div className="footer__nav__title">Contact & Sitemap</div>
        <ul className="footer__nav__list">
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Contact Us
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Sitemap
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Countries
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav">
        <div className="footer__nav__title">My Account</div>
        <ul className="footer__nav__list">
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Log In
            </a>
          </li>
          <li className="footer__nav__item">
            <a href="/" className="footer__nav__link">
              Register
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav footer__nav--social">
        <div className="footer__nav__title">Follow us on</div>
        <div className="footer__nav--social__items">
          <figure className="footer__nav--social__item footer__nav--social__item--facebook">
            <i class="fab fa-facebook-square"></i>
          </figure>
          <figure className="footer__nav--social__item footer__nav--social__item--twitter">
            <i class="fab fa-twitter"></i>
          </figure>
          <figure className="footer__nav--social__item footer__nav--social__item--instagram">
            <i class="fab fa-instagram"></i>
          </figure>
          <figure className="footer__nav--social__item footer__nav--social__item--instagram">
            <i class="fab fa-instagram"></i>
          </figure>
        </div>
      </div>
      <div className="footer__copy-right">
        © 2020 CheapCARS.ng™. All Rights Reserved.{" "}
      </div>
    </footer>
  );
};

export default Footer;

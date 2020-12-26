import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import Map from "../Commons/map";
import states from "../../constants/states";
import posts from "../../constants/sponsored-post";
import latestPost from "../../constants/latest-posts";
import Header from "../Commons/header";

import "pure-react-carousel/dist/react-carousel.es.css";
import categories from "../../constants/categories";
const Home = () => {
  const [sponsoredPosts] = useState(posts);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="home-container">
      <Header />
      <section className="wide-intro">
        <h1 className="wide-intro__title">BUY, SELL, RENT & CONNECT ONLINE </h1>
        <h3 className="wide-intro__sub-title">
          Find Car Dealers , Private Sellers & Service Providers Online - Great
          Offers, Fast Deals{" "}
        </h3>
        <div className="wide-intro__search">
          <div className="wide-intro__search__box">
            <i className="fa fa-folder-open-o wide-intro__search__box__icon"></i>
            <input
              type="text"
              className="wide-intro__search__box__input"
              placeholder="What are you looking for"
            />
          </div>
          <div className="wide-intro__search__box">
            <i className="fa fa-map-marker wide-intro__search__box__icon"></i>
            <input
              type="text"
              className="wide-intro__search__box__input"
              placeholder="Where ?"
            />
          </div>
          <button className="wide-intro__search__box__button">
            <i className="fa fa-search"></i>Search Now
          </button>
        </div>
      </section>
      <section className="region">
        <div className="region__container">
          <div className="region__city">
            <h2 className="region__city__title">
              <i className="fa fa-map-marker region__city__map-icon"></i>
              Choose a city or region
            </h2>
            <ul className="region__city__list">
              {states.map((state) => (
                <li className="region__city__item" key={state}>
                  <a href="/" className="region__city__link">
                    {state}
                  </a>
                </li>
              ))}
            </ul>
            <div className="region__city__button">
              <button className="post-ad">
                <i className="post-ad__icon fa fa-plus-circle"></i> Post Ad FREE
              </button>
            </div>
          </div>
          <div className="region__map">
            <Map />
          </div>
        </div>
      </section>
      <section className="sponsored">
        <div className="sponsored__container">
          <div className="sponsored__title">
            <span className="sponsored__title__text">
              <span className="sponsored__title__text--light">Sponsored</span>
              <span className="sponsored__title__text--dark">Ads</span>
            </span>
            <div className="sponsored__title__view-more">
              <span className="sponsored__title__view-more__text">
                View more
              </span>
              <i className="fa fa-bars sponsored__title__view-more__icon"></i>
            </div>
          </div>

          <CarouselProvider
            totalSlides={posts.length}
            naturalSlideWidth={100}
            naturalSlideHeight={123}
            visibleSlides={5}
            infinite={true}
            isPlaying={isPlaying}
            interval={1000}
            orientation="horizontal"
          >
            <Slider className="sponsored__posts">
              {sponsoredPosts.map((post, index) => (
                <Slide
                  index={index}
                  className="sponsored__post"
                  onMouseOver={() => setIsPlaying(false)}
                  onMouseLeave={() => setIsPlaying(true)}
                >
                  <figure className="sponsored__post__picture">
                    <img src={post.picture} alt="" />
                  </figure>
                  <p className="sponsored__post__title">{post.title}</p>
                  <div className="sponsored__post__review">
                    <StarRatings
                      rating={post.rating}
                      starDimension="1.5rem"
                      starSpacing=".1rem"
                      starRatedColor="gold"
                    />
                    <span className="sponsored__post__review__text">
                      <span className="sponsored__post__review__text__count">
                        {post.reviews}{" "}
                        <span>{post.reviews > 1 ? "reviews" : "review"}</span>
                      </span>
                    </span>
                  </div>
                  <div className="sponsored__post__details">
                    <span className="sponsored__post__details__distance">
                      {`${post.distance} km`} <span>away</span>
                    </span>
                    <span className="sponsored__post__details__location">
                      <i className="fa fa-map-marker"></i> {post.location}
                    </span>
                  </div>{" "}
                  <div className="sponsored__post__details">
                    <span className="sponsored__post__details__price">
                      {`₦${post.price}`}
                    </span>
                  </div>
                </Slide>
              ))}
            </Slider>
            {/* <div className="sponsored__steps">
              {sponsoredPosts.map((post, index) => (
                <Dot
                  className="slide-dot"
                  slide={index}
                  disableActiveDots={true}
                />
              ))}
            </div> */}
          </CarouselProvider>
        </div>
      </section>
      <section className="categories">
        <div className="categories__container">
          <div className="categories__title">
            <span className="categories__title__text">
              <span className="categories__title__text--light">Browse by</span>
              <span className="categories__title__text--dark">Category</span>
            </span>
            <div className="categories__title__view-more">
              <span className="categories__title__view-more__text">
                View more
              </span>
              <i className="fa fa-bars categories__title__view-more__icon"></i>
            </div>
          </div>
          <div className="categories__categories">
            {categories.map((category, index) => (
              <div className="categories__categories__category" key={index}>
                <figure className="categories__categories__category__picture">
                  <img src={category.picture} alt={category.title} />
                </figure>
                <h3 className="categories__categories__category__title">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="latest-ads">
        <div className="latest-ads__container">
          <div className="latest-ads__title">
            <span className="latest-ads__title__text">
              <span className="latest-ads__title__text--light">Latest</span>
              <span className="latest-ads__title__text--dark">Ads</span>
            </span>
            <div className="latest-ads__title__view-more">
              <span className="latest-ads__title__view-more__text">
                View more
              </span>
              <i className="fa fa-bars latest-ads__title__view-more__icon"></i>
            </div>
          </div>
          <div className="latest-ads__latest-ads">
            {latestPost.map((post, index) => (
              <div className="latest-ads__latest-ads__latest-ad" key={index}>
                {post.promotion && (
                  <figure className="latest-ads__latest-ads__latest-ad__badge">
                    {post.promotion.type}
                  </figure>
                )}
                <figure className="latest-ads__latest-ads__latest-ad__picture">
                  <img src={post.picture} alt={post.title} />
                </figure>
                <h3 className="latest-ads__latest-ads__latest-ad__title">
                  {post.title}
                </h3>
                <div className="latest-ads__latest-ads__latest-ad__details">
                  <span className="latest-ads__latest-ads__latest-ad__details__time">
                    <i className="fa fa-clock"></i> {post.created_at}
                  </span>
                  <span className="latest-ads__latest-ads__latest-ad__details__model">
                    <i className="fa fa-car"></i> {post.model}
                  </span>
                  <span className="latest-ads__latest-ads__latest-ad__details__model latest-ads__latest-ads__latest-ad__details__model--smallest">
                    <i className="fa fa-car"></i>{" "}
                    {post.model.length > 10
                      ? post.model.slice(0, 9) + "..."
                      : post.model}
                  </span>
                </div>
                <div className="latest-ads__latest-ads__latest-ad__details">
                  <span className="latest-ads__latest-ads__latest-ad__details__distance">
                    {`${post.distance} km away`}
                  </span>
                  <span className="latest-ads__latest-ads__latest-ad__details__location">
                    <i className="fa fa-map-marker"></i> {post.location}
                  </span>
                </div>
                <div className="latest-ads__latest-ads__latest-ad__details">
                  <span className="latest-ads__latest-ads__latest-ad__details__rating">
                    <StarRatings
                      rating={post.rating}
                      starDimension="1.5rem"
                      starSpacing=".1rem"
                      starRatedColor="gold"
                    />
                  </span>
                  <span className="latest-ads__latest-ads__latest-ad__details__reviews">
                    {post.reviews} {post.reviews > 1 ? "reviews" : "review"}
                  </span>
                </div>
                <div className="latest-ads__latest-ads__latest-ad__details latest-ads__latest-ads__latest-ad__details--down">
                  <span className="latest-ads__latest-ads__latest-ad__details__distance">
                    <div className="save">
                      <i className="fa fa-heart"></i>
                      <span>Save</span>
                    </div>
                  </span>
                  <span className="latest-ads__latest-ads__latest-ad__details__price">
                    {`₦${post.price}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="latest-ads__view-more">
            <div className="latest-ads__view-more__btn">
              <i class="fas fa-arrow-circle-right"></i>View More
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-stats">
        <div className="bottom-stats__container">
          <div className="bottom-stats__stats">
            <i class="fas fa-images"></i>
            <div className="bottom-stats__stats__figure">
              <h1 className="bottom-stats__stats__number">6086</h1>
              <p className="bottom-stats__stats__title">Free ads</p>
            </div>
          </div>
          <div className="bottom-stats__stats">
            <i className="fa fa-users"></i>{" "}
            <div className="bottom-stats__stats__figure">
              <h1 className="bottom-stats__stats__number">1896</h1>
              <p className="bottom-stats__stats__title">Trusted Sellers</p>
            </div>
          </div>
          <div className="bottom-stats__stats">
            <i class="far fa-map"></i>
            <div className="bottom-stats__stats__figure">
              <h1 className="bottom-stats__stats__number">471</h1>
              <p className="bottom-stats__stats__title">Locations</p>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Home;

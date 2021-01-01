import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../Commons/header";
import Footer from "../Commons/footer";
import StarRatings from "react-star-ratings";
import ImageCarousel from "../Commons/image-carousel";
import { recommendedPosts } from "../../constants/latest-posts";
import Post from "../Commons/post";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdDetails = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div className="ad-details">
      <Header />
      <div className="ad-details__navigation">
        <div className="ad-details__navigation__left">
          <i className="fa fa-home"></i> <span>/ Cars, Trucks & SUVs /</span>
          <span>Lexus /</span>
          <span>2017 Black Automatic lexus LX 570 /</span>
        </div>
        <div className="ad-details__navigation__right">
          <span>{"<< Back to Results"}</span>
        </div>
      </div>
      <div className="ad-details__main">
        <div className="ad-details__main__title">
          <h2>Direct tokumbo Lexus RX350</h2>
          <span>Dealer / Company</span>
          <i className="fa fa-check-circle"></i>
        </div>
        <div className="ad-details__main__quick-info">
          <span className="ad-details__main__quick-info__time">
            <i className="fa fa-clock"></i> <span>4 weeks ago - </span>
          </span>
          <span className="ad-details__main__quick-info__category">
            Cars, Trucks & SUVs -
          </span>
          <span className="ad-details__main__quick-info__location">
            <i className="fa fa-map-marker"></i> <span>Lagos - </span>
          </span>
          <span className="ad-details__main__quick-info__views">
            <i className="fa fa-map-marker"></i> <span>3.1k views</span>
          </span>
        </div>
        <div className="ad-details__main__images">
          <ImageCarousel />

          <figure>
            <StarRatings
              rating={4.5}
              starDimension="20px"
              starSpacing=".1rem"
              starRatedColor="gold"
            />
            <span>0.0 star</span>
          </figure>
        </div>

        <div className="ad-details__main__details">
          <Tabs>
            <TabList>
              <Tab>Ad Details</Tab>
              <Tab>Reviews (0)</Tab>
            </TabList>

            <TabPanel>
              <div className="ad-details__main__details__ad">
                <div className="ad-details__main__details__ad__heading">
                  <div className="ad-details__main__details__ad__heading__location">
                    <i className="fa fa-map-marker"></i> <h2>Location:</h2>{" "}
                    <span>Ojodu Berger</span>
                  </div>
                  <div className="ad-details__main__details__ad__heading__price">
                    <h2>Price:</h2>
                    <span>N2,480,000</span>
                    <span>Negotiable</span>
                  </div>
                </div>{" "}
                <div className="ad-details__main__details__ad__description">
                  <p>
                    Just 3Months Crystal Mint Clean Direct 2010 Toyota Corolla
                    /URGENT SALES,CASH is needed today(Tokunbo Standard/Going
                    For an AFFORDABLE PRICE). The Corolla line-up starts with
                    the LE, which comes with the 2.4-litre with five-speed
                    automatic, CD/MP3 player,DVD Player, air conditioning, 60/40
                    folding rear seatbacks, power locks with keyless entry,
                    power windows, cruise control, 16-inch steel
                    wheels,intermittent wipers and heated power
                    mirrors,comfortable Silk fabric Interior.This Ride Is just
                    TOKUNBO with nothing to fix,absolutely pay and
                    drive.Interested and Serious Buyers Should call or WhatsApp
                    for more Details and NEGOTIATIONS.
                    Location:Ojodu-Berger,Lagos State‎.
                  </p>
                </div>
                <div className="ad-details__main__details__ad__additional-details">
                  <div className="ad-details__main__details__ad__additional-details__title">
                    <i className="fa fa-bars"></i>{" "}
                    <h2 className="h2">Additional Details</h2>
                  </div>

                  <div className="ad-details__main__details__ad__additional-details__container">
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Model</span> <span>Corolla</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Year</span> <span>2010</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Transmission</span> <span>Automatic</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Body Type</span> <span>Sedan</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Nos. of Doors</span> <span>4 Doors</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Mileage (km)</span> <span>88000</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Condition</span> <span>Used</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Interior Color</span> <span>Cream</span>
                    </div>
                    <div className="ad-details__main__details__ad__additional-details__container__detail">
                      <span>Exterior Color</span> <span>Red</span>
                    </div>
                  </div>
                  <div className="ad-details__main__details__ad__features">
                    <span className="ad-details__main__details__ad__features__title">
                      Features:
                    </span>
                    <div className="ad-details__main__details__ad__features__container">
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Adaptable air bags </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Adaptable headlights </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i> <span>Alarm</span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Alloy wheels </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Back-up assistance </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i> <span>Bluetooth </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Dual Climate Controls </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Entertainment Package </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Fabric Seats </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i> <span>Fog lights </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Heated mirrors </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Heated Seats </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Memory Seats </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Power locks </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Power mirrors </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i> <span>Power Seat </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Power windows </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Security System </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Self-parking devices </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>{" "}
                        <span>Self-parking devices </span>
                      </div>

                      <div>
                        <i className="fa fa-check"></i> <span>Sensors</span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>
                        <span>Stability Control </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i> <span>Sunroof</span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>
                        <span>Tire pressure alert system </span>
                      </div>
                      <div>
                        <i className="fa fa-check"></i>
                        <span> Tow package </span>
                      </div>
                    </div>
                  </div>
                  <div className="ad-details__main__details__ad__tags">
                    <div className="ad-details__main__details__ad__tags__title">
                      <i className="fa fa-tag"></i>{" "}
                      <h2 className="h2">Tags:</h2>
                    </div>
                    <div className="ad-details__main__details__ad__tags__tag">
                      <button>arepo</button>
                    </div>
                  </div>
                  <div className="ad-details__main__details__ad__actions">
                    <i class="far fa-envelope"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-exclamation-circle"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ad-details__main__details__review">
                {isLoggedIn ? (
                  <>
                    <form className="ad-details__main__details__review__form">
                      <textarea
                        className="ad-details__main__details__review__textarea"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                      <div className="ad-details__main__details__review__button">
                        <StarRatings
                          rating={4.5}
                          starDimension="1.5rem"
                          starSpacing=".3rem"
                          starRatedColor="gold"
                        />
                        <button>Leave a Review</button>
                      </div>
                    </form>
                    <div className="ad-details__main__details__review__bottom-text">
                      This ad has no reviews yet. Be the first to leave a
                      review.
                    </div>
                  </>
                ) : (
                  <form className="ad-details__main__details__review__login">
                    <div className="ad-details__main__details__review__login__intro">
                      <span>Note:</span>{" "}
                      <span>You must be logged in to post a review. </span>
                    </div>
                    <div className="ad-details__main__details__review__login__inputs">
                      <input type="email" placeholder="Email or Phone" />
                      <input type="password" placeholder="password" />
                      <button>Login</button>
                    </div>

                    <div className="ad-details__main__details__review__login__captcha">
                      <ReCAPTCHA
                        sitekey="6LdEVBsaAAAAAHx5BRsT0nG5Pm5kBFXGKYxq5ULu"
                        onChange={(value) => {}}
                      />
                      
                    </div>
                  </form>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="ad-details__main__details__buttons">
          <div className="ad-details__sidebar__contact ad-details__main__contact">
            <button>
              <i className="fa fa-phone"></i> Phone Number
            </button>
            <button>
              <i class="fas fa-envelope-open-text"></i> Send a message
            </button>
          </div>
        </div>
      </div>
      <div className="ad-details__sidebar">
        <div className="ad-details__sidebar__owner">
          <figure className="ad-details__sidebar__owner__picture">
            <i className="fa fa-user"></i>
          </figure>
          <div className="ad-details__sidebar__owner__data">
            <span>Posted By</span>
            <h3>Anthony Jacob</h3>
            <figure className="ad-details__sidebar__owner__rating">
              <StarRatings
                rating={4.5}
                starDimension="1.5rem"
                starSpacing=".1rem"
                starRatedColor="gold"
              />
              <span>4 rating</span>
            </figure>
          </div>
        </div>
        <div className="ad-details__sidebar__joined">
          <span>
            <i className="fa fa-map-marker"></i> <span>Location</span>
          </span>
          <span className="ad-details__sidebar__joined__location">Yaba</span>
          <span>
            <i className="fa fa-user"></i> <span>Joined</span>
          </span>
          <span>1 week ago</span>
        </div>
        <div className="ad-details__sidebar__contact">
          <button>
            <i className="fa fa-phone"></i> Phone Number
          </button>
          <button>
            <i class="fas fa-envelope-open-text"></i> Send a message
          </button>
        </div>
        <div className="ad-details__sidebar__card">
          <div className="ad-details__sidebar__card__title">
            <h3>Location's Map</h3>
          </div>
          <div className="ad-details__sidebar__card__body">
            <iframe
              title="google-map"
              id="googleMaps"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD4tXE0aB-04Bksr1vqAab90qt35Gy-hMw&amp;q=Yaba%2CNigeria&amp;language=en"
              width="100%"
              height="250"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div className="ad-details__sidebar__socials">
          <figure className="ad-details__sidebar__socials__facebook">
            <i class="fab fa-facebook-f"></i>
          </figure>
          <figure className="ad-details__sidebar__socials__twitter">
            <i class="fab fa-twitter"></i>
          </figure>
          <figure className="ad-details__sidebar__socials__whatsapp">
            <i class="fab fa-whatsapp"></i>
          </figure>
          <figure className="ad-details__sidebar__socials__linkedin">
            <i class="fab fa-linkedin-in"></i>
          </figure>
        </div>
        <div className="ad-details__sidebar__card">
          <div className="ad-details__sidebar__card__title">
            <h3>Safety Tips for Buyers</h3>
          </div>
          <div className="ad-details__sidebar__card__body">
            <ul className="ad-details__sidebar__card__body__safety-tips">
              <li>
                <i className="fa fa-check"></i>{" "}
                <span>Meet seller at a public place</span>
              </li>
              <li>
                <i className="fa fa-check"></i>{" "}
                <span>Check the vehicle before you buy</span>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <span>
                  Pay only after Physically Inspecting the vehicle/Spare Parts
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ad-details__recommended">
        <div className="ad-details__recommended__title">
          <h1 className="h1">Recommended Cars For You</h1>
          <figure className="ad-details__line"></figure>
        </div>

        <div className="all-ads__posts__posts__cars all-ads__posts__posts__cars--recommended">
          {recommendedPosts.map((post, index) => (
            <Post index={index} post={post} />
          ))}
        </div>
      </div>
      {/* <div className="ad-details__container">
        <div className="ad-details__wrapper">
          

         
        </div>

        
      </div> */}
      <Footer />
    </div>
  );
};

export default AdDetails;

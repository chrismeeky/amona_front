import React, { useState, useEffect, useRef } from "react";
import Header from "../Commons/header";
import Footer from "../Commons/footer";
const Dashboard = () => {
  const accountRef = useRef();
  const myAdsRef = useRef();
  const terminateRef = useRef();

  const [accountHeight, setAccountHeight] = useState({});
  const [myAdsHeight, setMyAdsHeight] = useState({});
  const [terminateHeight, setTerminateHeight] = useState({});

  useEffect(() => {
    const account = accountRef.current.clientHeight;
    const myAds = myAdsRef.current.clientHeight;
    const terminate = terminateRef.current.clientHeight;

    setAccountHeight({ initial: account, new: null });
    setMyAdsHeight({ initial: myAds, new: null });
    setTerminateHeight({ initial: terminate, new: null });
  }, []);

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard__sidebar">
        <div className="dashboard__sidebar__section">
          <div
            className="dashboard__sidebar__section__title"
            onClick={() => {
              if (accountHeight.initial > 0) {
                setAccountHeight({ initial: 0, new: accountHeight.initial });
              } else {
                setAccountHeight({ initial: accountHeight.new });
              }
            }}
          >
            <h2>My Account</h2>{" "}
            <i
              className={`fa fa-chevron-right dashboard__sidebar__section__title__icon ${
                accountHeight.initial > 0 &&
                "dashboard__sidebar__section__title__icon--open"
              }`}
            ></i>
          </div>
          <ul
            ref={accountRef}
            className="dashboard__sidebar__section__list account"
            id="account"
            style={{ height: accountHeight.initial, overflow: "hidden" }}
          >
            <li className="dashboard__sidebar__section__item dashboard__sidebar__section__item--home">
              <i className="fa fa-home"></i> <span>Personal Home</span>
            </li>
          </ul>
        </div>
        <div className="dashboard__sidebar__section">
          <div
            className="dashboard__sidebar__section__title"
            onClick={() => {
              if (myAdsHeight.initial > 0) {
                setMyAdsHeight({ initial: 0, new: myAdsHeight.initial });
              } else {
                setMyAdsHeight({ initial: myAdsHeight.new });
              }
            }}
          >
            <h2>My Ads</h2>{" "}
            <i
              className={`fa fa-chevron-right dashboard__sidebar__section__title__icon ${
                myAdsHeight.initial > 0 &&
                "dashboard__sidebar__section__title__icon--open"
              }`}
            ></i>
          </div>
          <ul
            className="dashboard__sidebar__section__list"
            ref={myAdsRef}
            style={{ height: myAdsHeight.initial, overflow: "hidden" }}
          >
            <li className="dashboard__sidebar__section__item">
              <i class="far fa-images"></i> <span>My ads</span>{" "}
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-heart"></i> <span>Favorite ads</span>{" "}
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-star"></i>
              <span>Saved searches</span>{" "}
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-hourglass-start"></i>
              <span>Pending approval</span>{" "}
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-folder"></i>
              <span>Archived ads</span>{" "}
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-envelope"></i>
              <span>Conversations</span>
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
            <li className="dashboard__sidebar__section__item">
              <i class="fas fa-dollar-sign"></i>
              <span>Transactions</span>
              <span className="dashboard__sidebar__section__item__count">
                0
              </span>
            </li>
          </ul>
        </div>
        <div className="dashboard__sidebar__section">
          <div
            className="dashboard__sidebar__section__title"
            onClick={() => {
              if (terminateHeight.initial > 0) {
                setTerminateHeight({
                  initial: 0,
                  new: terminateHeight.initial,
                });
              } else {
                setTerminateHeight({ initial: terminateHeight.new });
              }
            }}
          >
            <h2>Terminate Account</h2>{" "}
            <i
              className={`fa fa-chevron-right dashboard__sidebar__section__title__icon ${
                terminateHeight.initial > 0 &&
                "dashboard__sidebar__section__title__icon--open"
              }`}
            ></i>
          </div>
          <ul
            className="dashboard__sidebar__section__list"
            ref={terminateRef}
            style={{ height: terminateHeight.initial, overflow: "hidden" }}
          >
            <li className="dashboard__sidebar__section__item dashboard__sidebar__section__item">
              <i class="fas fa-times-circle"></i>
              <span>Close account</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__main__fancy-line"></div>

        <div className="dashboard__main__quick-stat card">
          <figure className="dashboard__main__quick-stat__avatar">
            <i className="fa fa-user"></i>

            <h2>Christian</h2>
          </figure>

          <div className="dashboard__main__quick-stat__values">
            <div className="dashboard__main__quick-stat__values__group">
              <i class="far fa-envelope"></i>
              <div>
                <span>0</span>
                <span>mail</span>
              </div>
            </div>
            <div className="dashboard__main__quick-stat__values__group">
              <i class="far fa-eye"></i>
              <div>
                <span>0</span>
                <span>visit</span>
              </div>
            </div>
            <div className="dashboard__main__quick-stat__values__group">
              <i class="fas fa-th-large"></i>
              <div>
                <span>0</span>
                <span>mail</span>
              </div>
            </div>
            <div className="dashboard__main__quick-stat__values__group">
              <i class="far fa-user"></i>
              <div>
                <div>
                  <span>0</span>
                  <span>favorite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__main__profile card">
          <div className="dashboard__main__profile__heading">
            <h2 className="">Hello Christian ! </h2>
            <p>You last logged in at: 05 January 2021 06:54 </p>
          </div>
          <div className="dashboard__main__profile__photo card">
            <div className="dashboard__main__profile__photo__header">
              Photo or Avatar
            </div>
            <div className="dashboard__main__profile__photo__body">
              <figure className="dashboard__main__profile__photo__body__img card">
                <div>
                  <img
                    src="https://secure.gravatar.com/avatar/88527944e354382ff8d8d02009535165.jpg?s=150&amp;d=https%3A%2F%2Fwww.cheapcars.ng%2Fimages%2Fuser.jpg&amp;r=g"
                    alt="Profile"
                  />
                  <span>Click to select</span>
                </div>
              </figure>
            </div>
          </div>

          <div className="dashboard__main__profile__photo card">
            <div className="dashboard__main__profile__photo__header">
              Account Details
            </div>
            <div className="dashboard__main__profile__photo__body">
              <form action="" className="form form--account">
                <div className="formGroup">
                  <label htmlFor="" className="formGroup__label">
                    Name
                  </label>
                  <div className="formGroup__inputs__single">
                    <input type="text" className="formGroup__input" />
                  </div>
                </div>
                <div className="formGroup">
                  <label htmlFor="" className="formGroup__label">
                    Username
                  </label>
                  <div className="formGroup__inputs__double">
                    <i className="fa fa-user"></i>
                    <input
                      type="text"
                      className="formGroup__input"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="" className="formGroup__label">
                    Email
                  </label>
                  <div className="formGroup__inputs__double">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      className="formGroup__input"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="formGroup">
                  <label htmlFor="" className="formGroup__label">
                    Phone
                  </label>
                  <div className="formGroup__inputs__tripple">
                    <i class="fas fa-phone"></i>
                    <input
                      type="text"
                      className="formGroup__input"
                      placeholder="Phone"
                    />
                    <div className="formGroup__inputs__tripple__check">
                      <input
                        className="formGroup__inputs__tripple__checkbox"
                        type="checkbox"
                      />
                      <label
                        htmlFor=""
                        className="formGroup__inputs__tripple__label"
                      >
                        Hide
                      </label>
                    </div>
                  </div>
                </div>
                <button className="form__browse">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

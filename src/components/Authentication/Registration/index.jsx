import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../Commons/header";
import Footer from "../../Commons/footer";

const Registration = () => {
  return (
    <div className="register">
      <Header />
      <div className="register__container">
        <div className="register__main">
          <div className="register__main__heading">
            <i className="fa fa-user"></i>{" "}
            <h1 className="h1"> Create your account, It's 100% free</h1>
          </div>

          <form action="" className="form">
            <div className="formGroup">
              <label htmlFor="" className="formGroup__label">
                Name
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
                Password
              </label>
              <div className="formGroup__inputs__double">
                <i class="fas fa-lock"></i>
                <input
                  type="text"
                  className="formGroup__input"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="" className="formGroup__label">
                Confirm
              </label>
              <div className="formGroup__inputs__double">
                <i class="fas fa-lock"></i>
                <input
                  type="text"
                  className="formGroup__input"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            {/* <div className="formGroup">
              <label htmlFor="" className="formGroup__label">
                Name
              </label>
              <div className="formGroup__inputs__single">
                <input type="text" className="formGroup__input" />
              </div>
            </div> */}

            <div className="form__captcha ">
              <ReCAPTCHA
                sitekey="6LdEVBsaAAAAAHx5BRsT0nG5Pm5kBFXGKYxq5ULu"
                onChange={(value) => {}}
              />
            </div>
            <div className="form__terms">
              <input type="checkbox" />
              <label htmlFor="">
                {" "}
                have read and agree to the Terms & Conditions
              </label>
            </div>

            <button className="form__button">Register</button>
          </form>
        </div>
        <div className="register__sidebar">
          <div className="register__sidebar__info">
            <i class="far fa-images"></i>
            <h2>Post a Free Classified</h2>
            <p>
              Do you have a vehicle to sell, to rent, any automobile related
              service to offer? Post it at CheapCARS.ng™, its free, for local
              business and very easy to use!{" "}
            </p>
          </div>{" "}
          <div className="register__sidebar__info">
            <i class="far fa-edit"></i>
            <h2>Create and Manage Items</h2>
            <p>
              Become a best seller or buyer. Create and Manage your ads. Repost
              your old ads, etc.
            </p>
          </div>{" "}
          <div className="register__sidebar__info">
            <i class="fas fa-heart"></i>
            <h2>Create your Favorite ads list</h2>
            <p>
              Create your Favorite ads list. And save your search. Don't forget
              any deal.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;

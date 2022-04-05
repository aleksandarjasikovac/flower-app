import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

export const Header = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [logInModal, setLogInModal] = useState(false);

  const signUpToggleModal = () => {
    setSignUpModal(!signUpModal);
  };

  const toggleLogInModal = () => {
    setLogInModal(!logInModal);
  };

  //prevent scrolling if modal is open
  if (signUpModal || logInModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex">
        <div className=" flex w-full justify-between items-center  py-6  md:space-x-10">
          <div className="ml-4 flex lg:ml-0">
            <Link to="/">
              <img src={logo} alt="FlwrSpot" />
            </Link>
          </div>
          <div className=" flex ">
            <ul className="space-x-14 flex items-center text-secondary ">
              <li>Flowers</li>
              <li>Latest Sightings</li>
              <li>Favorites</li>
            </ul>
            <button onClick={toggleLogInModal} className="ml-12 text-primary">
              Login
            </button>
            <button
              onClick={signUpToggleModal}
              className="ml-12 bg-primary text-white py-3 px-8 rounded-full"
            >
              New Account
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {signUpModal && <SignUp modal={signUpToggleModal} />}
      </div>
      <div className="">{logInModal && <Login modal={toggleLogInModal} />}</div>
    </header>
  );
};

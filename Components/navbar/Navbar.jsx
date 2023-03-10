"use client";
import Login from "app/auth/Login";
import Signup from "app/auth/Signup";
import { GlobalContext } from "context/GlobalState";
import React, { useContext } from "react";
import { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const { getLoggedInUserData } = useContext(GlobalContext)
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const handleSignUp = () => setVisibleSignUp(p => !p)
  const handleLogin = () => setVisibleLogin(p => !p)
  return (
    <>
      <div className="flex items-center justify-between drop-shaadow-lg md:p-3 p-2">
        <div>LOGO</div>
        {JSON.parse(localStorage.getItem("pocketbase_auth"))?.model.email ? <Modal/> : <div className="flex gap-x-5">
          <button className="btn" onClick={handleSignUp}>
            Sign up
          </button>
          <button className="btn" onClick={handleLogin}>
            log in
          </button>
        </div>}
      </div>
      <Login onLoginClose={handleLogin} showLogin={visibleLogin} />
      <Signup onSignupClose={handleSignUp} showSignup={visibleSignUp} />
    </>
  );
};

export default Navbar;

"use client";
import { GlobalContext } from "context/GlobalState";
import { useRouter } from "next/navigation";
import React from "react";
import { useContext } from "react";

import { useState } from "react";

const Signup = ({ showSignup, onSignupClose }) => {
  const { pb, signUpData, setSignUpData, isUserAuthenticated } = useContext(
    GlobalContext
  );
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const flag1 = Object.values(signUpData).every(value => !!value == false);
      if (flag1) {
        console.error("fill the complete form");
      }
      const res = await pb.collection("users").create(signUpData);
      isUserAuthenticated(signUpData.email, signUpData.password);
      onSignupClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!showSignup) return;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="card w-96 bg-primary text-primary-content mx-4">
        <div className="btn absolute right-4 top-4" onClick={onSignupClose}>
          X
        </div>
        <div className="card-body">
          <h2 className="card-title">SignUp</h2>
          <label className="label">
            <span className="label-text text-black text-xl">Email</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e =>
              setSignUpData(p => ({ ...p, email: e.target.value }))}
          />
          {/* <label className="label">
            <span className="label-text text-black text-xl">Username</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e =>
              setSignUpData(p => ({ ...p, username: e.target.value }))}
          /> */}
          <label className="label">
            <span className="label-text text-xl text-black">Password</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e =>
              setSignUpData(p => ({ ...p, password: e.target.value }))}
          />
          <label className="label">
            <span className="label-text text-xl text-black">
              Confirm Password
            </span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e =>
              setSignUpData(p => ({ ...p, passwordConfirm: e.target.value }))}
          />
          <div className="card-actions justify-end">
            <button className="btn" onClick={handleSubmit}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

"use client";
import { AuthContext } from "context/authContext";
import { GlobalContext } from "context/GlobalState";
import React, { useContext } from "react";

const Login = ({ showLogin, onLoginClose }) => {
  const { pb, loginData, setLoginData, isUserAuthenticated } = useContext(
    GlobalContext
  );

  const handleLogin = async e => {
    e.preventDefault();
    const flag1 = Object.values(loginData).every(value => !!value == false);
    if (flag1) {
      console.error("fill all the data correctly");
    }
    const authData = await pb
      .collection("users")
      .authWithPassword(loginData.email, loginData.password);

    isUserAuthenticated(loginData.email, loginData.password);
    onLoginClose();
  };

  if (!showLogin) return;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="btn absolute right-4 top-4" onClick={onLoginClose}>
          X
        </div>
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <label className="label">
            <span className="label-text text-black text-xl">Email</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e => setLoginData(p => ({ ...p, email: e.target.value }))}
          />
          <label className="label">
            <span className="label-text text-xl text-black">Password</span>
            <span className="label-text-alt">Alt label</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={e =>
              setLoginData(p => ({ ...p, password: e.target.value }))}
          />
          <div className="card-actions justify-end">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

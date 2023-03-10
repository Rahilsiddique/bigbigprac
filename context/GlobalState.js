"use client";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pb = new PocketBase("https://bigbitprac.fly.dev");
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const isUserAuthenticated = async (email, passowrd) => {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, passowrd);
    pb.authStore.isValid === true ? router.push("/Home") : router.push("/");
    localStorage.setItem("basicInfo", { email: email });
  };

  return (
    <GlobalContext.Provider
      value={{
        pb,
        loginData,
        setLoginData,
        signUpData,
        setSignUpData,
        isUserAuthenticated
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

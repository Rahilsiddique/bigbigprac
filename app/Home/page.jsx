"use client";
import LeftSection from "Components/homefeed/LeftSection";
import MiddleSection from "Components/homefeed/MiddleSection";
import RightSection from "Components/homefeed/RightSection";
import React, { useContext } from "react";

const feed = () => {
  return (
    <div className="md:grid grid-cols-8">
      <div className="col-span-2 border-2 border-white">
        <LeftSection />
      </div>
      <div className="col-span-4 border-2 border-white">
        <MiddleSection />
      </div>
      <div className="col-span-2 border-2 border-white hidden md:block">
        <RightSection />
      </div>
    </div>
  );
};

export default feed;

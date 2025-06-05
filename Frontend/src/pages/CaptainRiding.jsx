import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

import uberLogo from "../assets/uber-logo.png";
import { FinishRide } from "../components/FininshRide";

export const CaptainRiding = () => {
    const [finishRide, setFinishRide] = useState(false)
  return (
    <div className="relative h-screen">
      <img className="h-8 absolute left-4 top-3" src={uberLogo} alt="" />
      <Link to={"/CaptainHome"}>
        <HiMiniArrowLongLeft className="absolute bg-white text-4xl p-2 rounded-full right-3 top-3 rotate-180" />
      </Link>

      <div className="h-4/5 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/5 overflow-hidden p-4 w-full bg-yellow-300 flex items-center justify-between">
        <p className="font-semibold text-lg">4KM away</p>
        <button onClick={()=>setFinishRide(true)} className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        className={`pt-5 px-1 absolute bottom-0 bg-white w-full transition-all ease-in-out duration-300 tranform ${
          finishRide ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <FinishRide
        />
      </div>
    </div>
  );
};

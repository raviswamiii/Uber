import React, { useState } from "react";
import uberLogo from "../assets/uber-logo.png";
import { RiArrowDownWideFill } from "react-icons/ri";
import { LocationSearchPanel } from "../components/LocationSearchPanel";

export const Home = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div className="relative h-screen w-full">
      <img className="h-8 absolute left-4 top-3" src={uberLogo} alt="" />

      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        <div className="absolute bottom-0 bg-white w-full ">
          <form className="flex flex-col p-3 gap-3 h-[25vh] relative">
            <div className="flex items-center mb-1">
              <h1 className="text-xl font-semibold">Find a trip</h1>
              <RiArrowDownWideFill
                onClick={() => setOpenPanel(false)}
                className={`${
                  openPanel === false
                    ? "absolute right-4 text-2xl text-gray-500 opacity-0"
                    : "absolute right-4 text-2xl text-gray-500"
                }`}
              />
            </div>
            <input
              onClick={() => setOpenPanel(true)}
              className="bg-[#eee] py-2 px-8 rounded-lg placeholder-gray-500 outline-yellow-500"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setOpenPanel(true)}
              className="bg-[#eee] py-2 px-8 rounded-lg placeholder-gray-500 outline-yellow-500 mb-5"
              type="text"
              placeholder="Enter your destination"
            />
            <div className="absolute h-14 w-[3px] bg-black rounded-full top-[42%] left-7"></div>
          </form>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openPanel ? "bg-white h-[75vh]" : "h-0"
            }`}
          >
           <LocationSearchPanel/>
          </div>
        </div>
      </div>

      
    </div>
  );
};

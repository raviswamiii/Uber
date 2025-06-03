import React from "react";
import uberLogo from "../assets/uber-logo.png";
import { LuSearch } from "react-icons/lu";
import { HiMiniClock } from "react-icons/hi2";

export const Home = () => {
  return (
    <div className="p-4">
      <img className="h-8 mb-7" src={uberLogo} alt="" />

      <div className="flex flex-col gap-3">
        <div className="flex bg-gray-200 items-center py-3 px-4 rounded-full gap-3">
          <LuSearch className="text-2xl " />
          <input
            className="bg-transparent text-lg font-semibold placeholder-gray-600 outline-none"
            type="text"
            placeholder="Where to?"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 px-3 py-4 border-2 rounded-lg">
            <div className="bg-gray-200 p-2 rounded-lg">
              <HiMiniClock className="text-lg" />
            </div>
            <div className="leading-4 ">
              <p className="">Chomu Pulia Circle</p>
              <p className="text-sm text-gray-500 truncate w-[70vw]">
                Chomu Pulia Cir, Ambabari, Vidyadhar Nagar, Jaipur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-4 border-2 rounded-lg">
            <div className="bg-gray-200 p-2 rounded-lg">
              <HiMiniClock className="text-lg" />
            </div>
            <div className="leading-4 ">
              <p className="">Shri Hari Ram Saboo Public School</p>
              <p className="text-sm text-gray-500 truncate w-[70vw]">
                WAQW+9Q7, Subash Nagar, Shastri Nagar, Jaipur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Suggestion</h3>
          <p>See all</p>
        </div>

        <div>
          <div>
            <p>Courier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

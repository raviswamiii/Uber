import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";

export const ConfirmRide = () => {
  return (
    <div className="py-4 px-2">
      <div className="relative flex">
        <h1 className="text-xl font-semibold">Choose a vehicle</h1>
        <RiArrowDownWideFill className="absolute right-4 text-2xl text-gray-500" />
      </div>
      
      <div className="flex justify-center mb-2">
        <img
        className="h-32"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      </div>

      <div>
        <div className="flex items-center border-bottom gap-4 p-2">
          <RiUserLocationFill className="h-4" />

          <div>
            <h2 className="text-xl font-semibold leading-5">563/11-A</h2>
            <p className="text-sm text-gray-800">Jalmahal, Jaipur</p>
          </div>
        </div>
        <div className="flex items-center border-bottom gap-4 p-2 border-t border-gray-400">
          <FaLocationDot className="h-4" />
          <div>
            <h2 className="text-xl font-semibold leading-5">563/11-A</h2>
            <p className="text-sm text-gray-800">Jalmahal, Jaipur</p>
          </div>
        </div>
        <div className="flex items-center border-bottom gap-4 p-2 border-t border-gray-400">
          <BsCash className="h-4" />

          <div>
            <h2 className="text-xl font-semibold leading-5">₹193.20</h2>
            <p className="text-sm text-gray-800">Cash Cash</p>
          </div>
        </div>
      </div>
      <button className="bg-green-600 w-full text-white rounded-md py-2 mt-2">
        Confirm
      </button>
    </div>
  );
};

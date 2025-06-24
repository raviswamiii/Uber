import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";

export const RidePopUp = ({
  setOpenRidePopUpPanel,
  setOpenConfirmRidePopUpPanel,
  ride,
  confirm,
}) => {
  return (
    <div className="py-4 px-2">
      <div className="flex">
        <h1 className="text-xl font-semibold">New Ride Available!</h1>
      </div>

      <div className="flex items-center justify-between border border-yellow-400 p-3 rounded-lg my-4">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-white">
            <img
              className="h-full w-full object-contain"
              src="https://th.bing.com/th/id/OIP.sOY58mdRBCIIMolGppzBBwHaJQ?w=185&h=231&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
          </div>
          <h1 className="text-lg font-semibold">
            {ride?.user.fullName.firstName + " " + ride?.user.fullName.lastName}
          </h1>
        </div>
        <h2 className="font-semibold">2.2KM</h2>
      </div>

      <div>
        <div className="flex items-center border-bottom gap-4 p-2">
          <RiUserLocationFill className="h-4" />

          <div>
            <h2 className="text-xl font-semibold leading-5">563/11-A</h2>
            <p className="text-sm text-gray-800">{ride?.pickup}</p>
          </div>
        </div>
        <div className="flex items-center border-bottom gap-4 p-2 border-t border-gray-400">
          <FaLocationDot className="h-4" />
          <div>
            <h2 className="text-xl font-semibold leading-5">563/11-A</h2>
            <p className="text-sm text-gray-800">{ride?.destination}</p>
          </div>
        </div>
        <div className="flex items-center border-bottom gap-4 p-2 border-t border-gray-400">
          <BsCash className="h-4" />

          <div>
            <h2 className="text-xl font-semibold leading-5">₹{ride?.fare}</h2>
            <p className="text-sm text-gray-800">Cash Cash</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setOpenConfirmRidePopUpPanel(true);
          confirm();
        }}
        className="bg-green-600 w-full text-white font-semibold rounded-md py-2 mt-5"
      >
        Accept
      </button>
      <button
        onClick={() => setOpenRidePopUpPanel(false)}
        className="bg-gray-300 w-full text-black font-semibold rounded-md py-2 mt-2"
      >
        Ignore
      </button>
    </div>
  );
};

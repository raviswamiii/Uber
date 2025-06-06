import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { RiTimer2Line } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";
import { RiBookletLine } from "react-icons/ri";
import uberLogo from "../assets/uber-logo.png";
import { RidePopUp } from "../components/RidePopUp";
import { ConfirmRidePopUp } from "../components/ConfirmRidePopUp";

export const CaptainHome = () => {
  const [openRidePopUpPanel, setOpenRidePopUpPanel] = useState(false);
  const [openConfirmRidePopUpPanel, setOpenConfirmRidePopUpPanel] =
    useState(false);

  useEffect(() => {
    if (openConfirmRidePopUpPanel === false) {
      setOpenRidePopUpPanel(false);
    }
  }, [openConfirmRidePopUpPanel]);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setOpenRidePopUpPanel(true)
    }, 1000);
    return () => clearTimeout(timer);
  },[])
  return (
    <div className="relative h-screen">
      <img className="h-8 absolute left-4 top-3" src={uberLogo} alt="" />

      <div className="h-[70%] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-[30%] overflow-hidden p-4 bg-white w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 object-cover rounded-full overflow-hidden">
              <img
                className="h-full w-full"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <h1 className="text-lg font-semibold">Shah Rukh Khan</h1>
          </div>

          <div className="text-end">
            <h2 className="text-xl font-semibold leading-3 mb-1">₹295.20</h2>
            <h3 className="text-sm text-gray-800">Earned</h3>
          </div>
        </div>

        <div className="flex justify-center gap-5 bg-gray-200 rounded-xl p-3 my-5">
          <div className="flex flex-col items-center">
            <RiTimer2Line className="text-2xl" />
            <h3 className="text-base font-semibold">10.2</h3>
            <p className="text-sm text-gray-900">Hours Online</p>
          </div>

          <div className="flex flex-col items-center">
            <RxTimer className="text-2xl" />
            <h3 className="text-base font-semibold">10.2</h3>
            <p className="text-sm text-gray-900">Hours Online</p>
          </div>

          <div className="flex flex-col items-center">
            <RiBookletLine className="text-2xl" />
            <h3 className="text-base font-semibold">10.2</h3>
            <p className="text-sm text-gray-900">Hours Online</p>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 bg-white w-full transition-all ease-in-out duration-300 tranform ${
          openRidePopUpPanel ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <RidePopUp
          setOpenRidePopUpPanel={setOpenRidePopUpPanel}
          setOpenConfirmRidePopUpPanel={setOpenConfirmRidePopUpPanel}
        />
      </div>

      <div
        className={`pt-5 px-1 h-screen absolute bottom-0 bg-white w-full transition-all ease-in-out duration-300 tranform ${
          openConfirmRidePopUpPanel ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ConfirmRidePopUp
          setOpenConfirmRidePopUpPanel={setOpenConfirmRidePopUpPanel}
        />
      </div>

      
    </div>
  );
};

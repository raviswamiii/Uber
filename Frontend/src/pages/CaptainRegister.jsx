import React from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";

export const CaptainRegister = () => {
  return (
    <div className="relative flex flex-col h-screen justify-between p-7">
      <img className="absolute top-5 left-7 z-10 h-6" src={uberLogo} alt="" />
      <form className="flex flex-col gap-8 mt-10" action="">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold mb-1">Enter captain's name</p>
            <div className="flex gap-3">
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="first name"
              />
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="last name"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter captain's email</p>
            <input
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="text"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">
              Enter captain's password
            </p>
            <input
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Vehicle information</p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="vehicle color"
              />
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="number"
                placeholder="vehicle plate"
              />
            </div>
            <div className="flex gap-3">
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="capacity"
              />
              <input
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="number"
                placeholder="vehicle type"
              />
            </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-black text-white w-full text-center py-2 rounded">
            Create Captain Account
          </button>
          <p className="text-center mt-1">
            Already have an account?{" "}
            <Link to="/captainLogin" className="text-blue-600">
              {" "}
              Login here
            </Link>
          </p>
        </div>
      </form>

      <p className="text-[11px] font-medium ">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline"> Google Privacy Policy</span> and{" "}
        <span className="underline"> Terms of Service apply</span>
      </p>
    </div>
  );
};

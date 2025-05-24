import React from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";

export const Start = () => {
  return (
    <div className="relative">
      <img className="absolute top-3 left-5 z-10 h-7" src={uberLogo} alt="" />
      <div className="h-[80vh] overflow-hidden">
        <img
          className="h-full w-full object-cover scale-150"
          src="https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[20vh] p-5">
        <h1 className="text-[7vw] font-bold mb-2">Get Started with Uber</h1>
        <Link
          to="/userLogin"
          className="bg-black text-white w-full py-2 text-center rounded"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

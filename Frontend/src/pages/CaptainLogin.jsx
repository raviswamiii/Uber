import React from "react";
import { Link } from "react-router-dom";
import uberLogo from  "../assets/uber-logo.png"

export const CaptainLogin = () => {
  return (
    <div className="relative flex flex-col h-screen justify-between p-7">
        <img className="absolute top-5 left-7 z-10 h-6" src={uberLogo} alt="" />
      <form className="flex flex-col gap-8 mt-10" action="">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold mb-1">Captain's email</p>
            <input
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="text"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Captain's password</p>
            <input
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div>
            <button className="bg-black text-white w-full text-center py-2 rounded">
          Login
        </button>
        <p className="text-center mt-1">New here? <Link to="/captainRegister" className="text-blue-600"> Register as a Captain</Link></p>
        </div>
      </form>

      <Link
        to="/userLogin"
        className="bg-orange-500 text-white w-full text-center py-2 rounded"
      >
        Sign in as User
      </Link>
    </div>
  );
};

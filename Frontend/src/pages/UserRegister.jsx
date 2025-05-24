import React from "react";
import { Link } from "react-router-dom";
import uberLogo from  "../assets/uber-logo.png"

export const UserRegister = () => {
  return (
    <div className="relative flex flex-col h-screen justify-between p-7">
        <img className="absolute top-5 left-7 z-10 h-6" src={uberLogo} alt="" />
      <form className="flex flex-col gap-8 mt-10" action="">
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-lg font-semibold mb-1">Enter your name</p>
                <div className="flex gap-3">
                    <input className="w-full py-2 px-3 rounded outline-none bg-gray-200" type="text" placeholder="first name"/>
                    <input className="w-full py-2 px-3 rounded outline-none bg-gray-200" type="text" placeholder="last name"/>
                </div>
            </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter your email</p>
            <input
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="text"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter your password</p>
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
        <p className="text-center mt-1">Already have an account? <Link to="/userLogin" className="text-blue-600"> Login here</Link></p>
        </div>
      </form>

      <p className="text-[11px] font-medium ">This site is protected by reCAPTCHA and the <span className="underline"> Google Privacy Policy</span> and <span className="underline"> Terms of Service apply</span></p>
    </div>
  );
};

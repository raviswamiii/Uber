import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    setUserData(user);

    setEmail("");
    setPassword("");
  };

  useEffect(()=>{
    console.log(userData);
  },[userData])
  return (
    <div className="relative flex flex-col h-screen justify-between p-7">
      <img className="absolute top-5 left-7 z-10 h-6" src={uberLogo} alt="" />
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col gap-8 mt-10"
        action=""
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold mb-1">Enter your email</p>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="text"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter your password</p>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
          <p className="text-center mt-1">
            New here?{" "}
            <Link to="/userRegister" className="text-blue-600">
              {" "}
              Create new Account
            </Link>
          </p>
        </div>
      </form>

      <Link
        to="/captainLogin"
        className="bg-green-500 text-white w-full text-center py-2 rounded"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

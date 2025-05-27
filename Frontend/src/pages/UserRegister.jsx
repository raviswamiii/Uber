import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import { UserContext } from "../context/UserContext";
import axios from "axios";
export const UserRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { backendURL } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password,
      };

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      const response = await axios.post(backendURL + "/user/register", newUser);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/home")
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <p className="text-lg font-semibold mb-1">Enter your name</p>
            <div className="flex gap-3">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="first name"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                type="text"
                placeholder="last name"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter your email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="email"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Enter your password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full py-2 px-3 rounded outline-none bg-gray-200"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white w-full text-center py-2 rounded"
          >
            Create Account
          </button>
          <p className="text-center mt-1">
            Already have an account?{" "}
            <Link to="/userLogin" className="text-blue-600">
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

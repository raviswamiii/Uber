import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const {backendURL} = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const captain = {
        email: email,
        password: password,
      };
      setCaptainData(captain);

      setEmail("");
      setPassword("");

      const response = await axios.post(backendURL + "/captain/captainLogin", captain);

      if(response.data.success){
        localStorage.setItem('token', response.data.token);
        navigate("/captainHome")
      }else{
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(captainData);
  }, [captainData]);
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
            <p className="text-lg font-semibold mb-1">Captain's email</p>
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
            <p className="text-lg font-semibold mb-1">Captain's password</p>
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
            <Link to="/captainRegister" className="text-blue-600">
              {" "}
              Register as a Captain
            </Link>
          </p>
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

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export const CaptainRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [captainData, setCaptainData] = useState({});
  const { backendURL } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const newCaptain = {
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        },
      };

      setCaptainData(newCaptain);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");

      const response = await axios.post(
        backendURL + "/captain/captainRegister",
        newCaptain
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/captainHome");
      } else {
        console.log(response.data.message);
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
            <p className="text-lg font-semibold mb-1">Enter captain's name</p>
            <div className="flex gap-3">
              <input
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
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
            <p className="text-lg font-semibold mb-1">Enter captain's email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
                  required
                  onChange={(e) => setVehicleColor(e.target.value)}
                  value={vehicleColor}
                  className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                  type="text"
                  placeholder="vehicle color"
                />
                <input
                  required
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  value={vehiclePlate}
                  className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                  type="number"
                  placeholder="vehicle plate"
                />
              </div>
              <div className="flex gap-3">
                <input
                  required
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  value={vehicleCapacity}
                  className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                  type="number"
                  placeholder="capacity"
                />
                <input
                  required
                  onChange={(e) => setVehicleType(e.target.value)}
                  value={vehicleType}
                  className="w-full py-2 px-3 rounded outline-none bg-gray-200"
                  type="text"
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

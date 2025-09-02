import React from "react";
import { Home } from "./pages/Home";
import { Start } from "./pages/Start";
import { UserLogin } from "./pages/UserLogin";
import { UserRegister } from "./pages/UserRegister";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainRegister } from "./pages/CaptainRegister";
import { Route, Routes } from "react-router-dom";
import { UserProtectedWrapper } from "./pages/UserProtectedWrapper";
import { UserLogout } from "./pages/UserLogout";
import { CaptainLogout } from "./pages/CaptainLogout";
import { CaptainHome } from "./pages/CaptainHome";
import { CaptainProtectedWrapper } from "./pages/CaptainProtectedWrapper";
import { Riding } from "./pages/Riding";
import { CaptainRiding } from "./pages/CaptainRiding";

export const App = () => {
  return (
    <div>
      <div className="hidden sm:flex h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black justify-center items-center">
        <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg text-center border border-white/20">
          <p className="text-gray-300 text-lg">
            This site is only accessible on{" "}
            <span className="text-indigo-400 font-medium">mobile devices</span>.
          </p>
        </div>
      </div>

      <div className="block sm:hidden">
        <Routes>
          <Route path={"/"} element={<Start />} />
          <Route
            path={"/home"}
            element={
              <UserProtectedWrapper>
                {" "}
                <Home />
              </UserProtectedWrapper>
            }
          />
          <Route
            path={"/captainHome"}
            element={
              <CaptainProtectedWrapper>
                {" "}
                <CaptainHome />
              </CaptainProtectedWrapper>
            }
          />
          <Route path={"/userLogin"} element={<UserLogin />} />
          <Route path={"/userLogout"} element={<UserLogout />} />
          <Route path={"/userRegister"} element={<UserRegister />} />
          <Route path={"/riding"} element={<Riding />} />
          <Route path={"/captainLogin"} element={<CaptainLogin />} />
          <Route path={"/captainRegister"} element={<CaptainRegister />} />
          <Route path={"/captainLogout"} element={<CaptainLogout />} />
          <Route path={"/captainRiding"} element={<CaptainRiding />} />
        </Routes>
      </div>
    </div>
  );
};

import React from "react";
import { Home } from "./pages/Home";
import { Start } from "./pages/Start";
import { UserLogin } from "./pages/userLogin";
import { UserRegister } from "./pages/userRegister";
import { CaptainLogin } from "./pages/captainLogin";
import { CaptainRegister } from "./pages/captainRegister";
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
  );
};

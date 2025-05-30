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
        <Route path={"/userLogin"} element={<UserLogin />} />
        <Route path={"/userLogout"} element={<UserLogout />} />
        <Route path={"/userRegister"} element={<UserRegister />} />
        <Route path={"/captainLogin"} element={<CaptainLogin />} />
        <Route path={"/captainRegister"} element={<CaptainRegister />} />
      </Routes>
    </div>
  );
};

import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export const UserLogout = () => {
  const { backendURL } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      // 🚫 If no token, just redirect
      if (!token) {
        navigate("/userLogin");
        return;
      }

      try {
        const response = await axios.get(`${backendURL}/user/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          localStorage.removeItem("token");
          navigate("/userLogin");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        localStorage.removeItem("token");
        navigate("/userLogin");
      }
    };

    logoutUser();
  }, [backendURL, navigate]);

  return <div>Logging you out...</div>;
};

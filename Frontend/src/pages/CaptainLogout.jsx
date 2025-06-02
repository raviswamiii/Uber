import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CaptainLogout = () => {
    const {backendURL} = useContext(UserContext);
    const navigate = useNavigate();

    const logoutCaptain = async () => {
        const token = localStorage.getItem("token");
        
        if(!token){
            navigate("/captainLogin");
            return;
        }

        try {
            const response = await axios.get(backendURL + "/captain/captainLogout", {
                headers: {Authorization: `bearer ${token}`}
            })

            if(response.data.success){
                localStorage.removeItem("token");
                navigate("/captainLogin")
            }
            
        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
            navigate("/captainLogin")
        }
    }

    useEffect(()=>{
        logoutCaptain();
    },[backendURL, navigate])
  return (
    <div>CaptainLogout</div>
  )
}

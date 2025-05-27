import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token) {
        navigate("/userLogin")
    }
    },[token])
  return (
    <div>{children}</div>
  )
}

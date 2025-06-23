import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();
export const UserContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [userData, setUserData] = useState(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser)); 
    }
  }, []);
    const value = {
        backendURL,
        userData,
        setUserData,
    }
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}

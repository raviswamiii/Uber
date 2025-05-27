import React, { createContext } from 'react'

export const UserContext = createContext();
export const UserContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {
        backendURL
    }
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}

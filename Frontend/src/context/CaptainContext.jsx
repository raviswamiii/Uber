import { createContext, useState } from "react"

export const CaptainContext = createContext();
export const CaptainContextProvider = (props) => {
    const [captainData, setCaptainData] = useState({});

    const value = {
        captainData,
        setCaptainData
    }

   return <CaptainContext.Provider value={value}>{props.children}</CaptainContext.Provider>
}
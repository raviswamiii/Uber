import { createContext, useEffect, useState } from "react";

export const CaptainContext = createContext();

export const CaptainContextProvider = (props) => {
  const [captainData, setCaptainData] = useState({});

  useEffect(() => {
    const storedCaptain = localStorage.getItem("captainData");
    if (storedCaptain) {
      setCaptainData(JSON.parse(storedCaptain)); 
    }
  }, []);

  const value = {
    captainData,
    setCaptainData,
  };

  return (
    <CaptainContext.Provider value={value}>
      {props.children}
    </CaptainContext.Provider>
  );
};

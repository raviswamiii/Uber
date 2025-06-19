import { createContext } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = (props) => {
  const socket = io(import.meta.env.VITE_BACKEND_URL);

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  })

  const value = {
    socket,
  };

  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};

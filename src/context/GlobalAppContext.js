import React, { useState, createContext } from "react";


const GlobalAppContext = createContext();

function GlobalAppContextProvider({ children }) {
  const [token, setToken] = useState("Jesse Hall");
    const value={
        setToken,
        token
    }
  return (
    <GlobalAppContext.Provider value={value}>
      { children }
    </GlobalAppContext.Provider>
  );
}

export  { GlobalAppContext, GlobalAppContextProvider };
import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [page, setPage] = useState("home");

  return (
    <MainContext.Provider value={[page, setPage]}>
      {props.children}
    </MainContext.Provider>
  );
};

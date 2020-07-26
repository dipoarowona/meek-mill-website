import React, { useState, useEffect, useContext } from "react";
import { MainProvider } from "./MainContext";
import Nav from "./nav";
import HomePage from "./homepage";
import "./CSS/App.css";

function App() {
  return (
    <MainProvider>
      <div>
        <Nav />
        <HomePage />
      </div>
    </MainProvider>
  );
}

export default App;

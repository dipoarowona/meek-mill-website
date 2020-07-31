import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainProvider } from "./MainContext";
import Nav from "./nav";
import HomePage from "./homepage";
import MusicPage from "./musicpage";
import "./CSS/App.css";

function App() {
  return (
    <Router>
      <MainProvider>
        <Switch>
          <div>
            <Nav />
            <Route path="/" exact component={HomePage} />
            <Route path="/music" exact component={MusicPage} />
          </div>
        </Switch>
      </MainProvider>
    </Router>
  );
}

export default App;

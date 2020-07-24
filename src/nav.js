import React from "react";
import "./CSS/App.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                MUSIC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                TOUR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                STORE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-link" href="#">
                #REFORM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

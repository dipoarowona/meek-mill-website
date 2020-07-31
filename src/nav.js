import React, { useContext } from "react";
import { MainContext } from "./MainContext";
import "./CSS/App.css";

const Nav = () => {
  const [page, setPage] = useContext(MainContext);
  const hover_reform = (e) => {
    setPage("reform");
  };
  const hover_music = (e) => {
    setPage("music");
  };
  const hover_tour = (e) => {
    setPage("tour");
  };
  const hover_videos = (e) => {
    setPage("videos");
  };
  const hover_store = (e) => {
    setPage("store");
  };
  const hover_home = (e) => {
    setPage("home");
  };

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
              <a
                onMouseOver={hover_home}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                onMouseOver={hover_music}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="/music"
              >
                MUSIC
              </a>
            </li>
            <li className="nav-item">
              <a
                onMouseOver={hover_tour}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="/tour"
              >
                TOUR
              </a>
            </li>
            <li className="nav-item">
              <a
                onMouseOver={hover_videos}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="/videos"
              >
                VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a
                onMouseOver={hover_store}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="https://shop.meekmill.com/"
              >
                STORE
              </a>
            </li>
            <li className="nav-item">
              <a
                onMouseOver={hover_reform}
                onMouseOut={hover_home}
                className="nav-link"
                id="nav-link"
                href="https://reformalliance.com/"
              >
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

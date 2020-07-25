import React, { useState, useEffect } from "react";
import Nav from "./nav";
import "./CSS/App.css";

function App() {
  const [color, setColor] = useState(1);
  const [transparency, setTransparency] = useState(100);

  const listenScrollEvent = (e) => {
    console.log(window.scrollY);
    setColor(0.73 - window.scrollY / 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div>
      <Nav />

      <div id="landingpage">
        <h1 landing-text>MEEK MILL</h1>
        <video style={{ opacity: color }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/11/mm-tidal-vid.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="content-1">
        <h1>TICKETS</h1>
        <h1>ON SALE</h1>
      </div>
      <div className="content-2">
        <div className="wrapper">
          <h1>LEGENDARY NIGHTS</h1>
        </div>
        <img
          src="https://api.meekmill.com/wp-content/uploads/2019/06/LNT-%E2%80%93-Tear-Landscape-3.0-1024x576.jpg"
          alt=""
        />
      </div>
      <div className="content-3">
        <div className="wrapper">
          <h1>LEGENDARY NIGHTS</h1>
        </div>
        <img
          src="https://api.meekmill.com/wp-content/uploads/2019/06/LNT-%E2%80%93-Tear-Landscape-3.0-1024x576.jpg"
          alt=""
        />
      </div>
      <div className="content-3">
        <div className="wrapper">
          <h1>LEGENDARY NIGHTS</h1>
        </div>
        <img
          src="https://api.meekmill.com/wp-content/uploads/2019/06/LNT-%E2%80%93-Tear-Landscape-3.0-1024x576.jpg"
          alt=""
        />
      </div>
      <div className="content-3">
        <div className="wrapper">
          <h1>LEGENDARY NIGHTS</h1>
        </div>
        <img
          src="https://api.meekmill.com/wp-content/uploads/2019/06/LNT-%E2%80%93-Tear-Landscape-3.0-1024x576.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;

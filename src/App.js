import React, { useState, useEffect } from "react";
import "./CSS/App.css";

function App() {
  const [color, setColor] = useState("White");
  const [transparency, setTransparency] = useState(100);

  // const listenScrollEvent = (e) => {
  //   if (window.scrollY > 100) {
  //     setColor("black");
  //   } else {
  //     setColor("white");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  // });

  return (
    <div /*style={{ background: color }}*/>
      <div id="landingpage">
        <h1 landing-text>Meek Mill</h1>
        <video autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/11/mm-tidal-vid.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="content">
        <h1>brand new section</h1>
      </div>
    </div>
  );
}

export default App;

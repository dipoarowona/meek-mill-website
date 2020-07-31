import React, { useEffect, useContext, useState } from "react";
import { MainContext } from "./MainContext";
import Footer from "./footer";

const HomePage = () => {
  const [page, setPage] = useContext(MainContext);
  const [color, setColor] = useState(1);

  const listenScrollEvent = (e) => {
    setColor(0.73 - window.scrollY / 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  let content = "";

  if (page === "home") {
    content = (
      <div>
        <div id="landingpage">
          <h1>MEEK MILL</h1>
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
      </div>
    );
  }
  if (page === "music") {
    content = (
      <div id="landingpage-nav-hover">
        <video style={{ zIndex: "1" }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/meekvideomusic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  if (page === "tour") {
    content = (
      <div id="landingpage-nav-hover">
        <video style={{ zIndex: "1" }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/MMtourSite2-1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  if (page === "videos") {
    content = (
      <div id="landingpage-nav-hover">
        <video style={{ zIndex: "1" }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/MMsiteVIDEO.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  if (page === "store") {
    content = (
      <div id="landingpage-nav-hover">
        <video style={{ zIndex: "1" }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/MMStore.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  if (page === "reform") {
    content = (
      <div id="landingpage-nav-hover">
        <video style={{ zIndex: "1" }} autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/REFORMvidforsite.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  return (
    <div>
      {content}

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
      <Footer />
    </div>
  );
};

export default HomePage;

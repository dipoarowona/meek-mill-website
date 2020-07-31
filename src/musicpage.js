import React, { useContext } from "react";
import { MainContext } from "./MainContext";
import Footer from "./footer";

const MusicPage = () => {
  const [page, setPage] = useContext(MainContext);
  let content = "";

  if (page === "home" || page === "music") {
    content = (
      <div>
        <h1>Music Page</h1>
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
      <Footer />
    </div>
  );
};

export default MusicPage;

import React, { useContext } from "react";
import { MainContext } from "./MainContext";

const MusicPage = () => {
  const [page, setPage] = useContext(MainContext);
  let content = "";

  if (page === "home") {
  }
  if (page === "music") {
  }
  if (page === "tour") {
    content = (
      <div id="landingpage-nav-hover">
        <video autoPlay loop muted>
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
        <video autoPlay loop muted>
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
        <video autoPlay loop muted>
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
        <video autoPlay loop muted>
          <source
            src="https://api.meekmill.com/wp-content/uploads/2018/08/REFORMvidforsite.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default MusicPage;

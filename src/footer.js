import React from "react";
import MMG from "./CSS/MMG-logo.png";
import DC from "./CSS/DC-logo.png";
import "./CSS/footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="icons">
        <a href="https://www.facebook.com/MeekMill/">
          <i className="fa fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/meekmill/">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://www.youtube.com/user/MeekMillTV">
          <i className="fa fa-youtube-play" />
        </a>
        <a href="https://twitter.com/meekmill">
          <i className="fa fa-twitter" />
        </a>
      </div>
      <div id="logo-bg">
        <img id="MMG" src={MMG} />
        <img id="DC-Logo" src={DC} />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import MenuLinks from "./menus";
import "./navigation.css";
import logo from "../../assets/logo-coradine.png";
import logoMobile from "../../assets/logo.png";

const Navigation = () => (
  <div className="Navigation">
    <div className="brand">
      <Link to={MenuLinks.landing.path}>
        <img src={logo} className="DesktopLogo" alt="Brand Logo" />
        <img src={logoMobile} className="MobileLogo" alt="" />
      </Link>
    </div>

    <div className="MenuIcon">Menu</div>

    <nav>
      <ul>
        <li>
          <Link to={MenuLinks.applicants.path}>
            {MenuLinks.applicants.name}
          </Link>
        </li>
        <li>
          <Link to={MenuLinks.interview.path}>{MenuLinks.interview.name}</Link>
        </li>
        <li>
          <Link to={MenuLinks.settings.path}>{MenuLinks.settings.name}</Link>
        </li>
        <li>
          <Link to={MenuLinks.candidateProfile.path}>
            {MenuLinks.candidateProfile.name}
          </Link>
        </li>
      </ul>

      <div className="UserProfile">
        <h5>Thomas Darko</h5>
        <div className="UserImage"></div>
      </div>
    </nav>

    <div className="MobileNav active">
      <div className="close">X</div>
      <ul>
        <li>Applications</li>
        <li>Interviews</li>
        <li>Settings</li>
        <li>For Candidate</li>
      </ul>
    </div>
  </div>
);

export default Navigation;

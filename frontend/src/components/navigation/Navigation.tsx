import React from "react";
import { Link } from "react-router-dom";
import MenuLinks from "./menus";
import "./navigation.css";
import logo from "./logo-coradine.png";

const Navigation = () => (
  <div className="Navigation">
    <div className="brand">
      <img src={logo} alt="Brand Logo" />
    </div>
    <nav>
      <ul>
          <li>
            <Link to={MenuLinks.landing.path}>
              {MenuLinks.landing.name}
            </Link>
          </li>
          <li>
            <Link to={MenuLinks.applicants.path}>
              {MenuLinks.applicants.name}
            </Link>
          </li>
          <li>
            <Link to={MenuLinks.interview.path}>
              {MenuLinks.interview.name}
            </Link>
          </li>
          <li>
            <Link to={MenuLinks.settings.path}>
            {MenuLinks.settings.name}
            </Link>
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
  </div>
);

export default Navigation;

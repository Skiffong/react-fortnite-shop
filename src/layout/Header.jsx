import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <a href="default" className="brand-logo center">
          <img className="responsive-img" src="favicon.png" alt="logo" />
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#!">Shop</a>
          </li>
          <li>
            <a href="#!">Events</a>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#!">Achievements</a>
          </li>
          <li>
            <a href="#!">News</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

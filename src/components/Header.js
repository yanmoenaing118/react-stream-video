import React from "react";
import { Link } from "react-router-dom";

import "./../styles/Header.scss";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/" className="Header__link">
        Streamy
      </Link>
      <Link to="/streams/show" className="Header__link">
        Streamy
      </Link>
    </div>
  );
};

export default Header;

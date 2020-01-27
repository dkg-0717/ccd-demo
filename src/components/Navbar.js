import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-img">
        <Link to="/">
          <img
            width="75"
            height="23"
            src="https://framework-gb.cdn.gob.mx/assets/images/gobmxlogo-2.svg"
            alt="img-logo"
          />
        </Link>
      </div>
      <nav className="header-menu">
        <ul>
          <li>
            <Link to="/departamentos">Departamentos</Link>
          </li>
          <li>
            <Link to="/culo">Feria del libro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

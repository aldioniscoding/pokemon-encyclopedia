import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <nav className="navigation">
      <Link className="nav-item" to="/my-pokemons">
        My Pokemon
      </Link>
    </nav>
  );
};

export default Header;

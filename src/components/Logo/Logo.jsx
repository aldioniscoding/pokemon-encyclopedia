import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import StoreContext from "../../context/StoreContext";
import logo from "../../../assets/images/pokemon_logo.png";
import { resetPokemons } from "../../context/PokemonsAction";

import "./Logo.scss";

const Logo = () => {
  const { dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onLogoClick = () => {
    history.push("/");
    resetPokemons(dispatch);
  };

  return (
    <button type="button" className="pokemon-header" onClick={() => onLogoClick()}>
      <img src={logo} alt="pokemon-logo" className="pokemon-intro" />
    </button>
  );
};

export default Logo;

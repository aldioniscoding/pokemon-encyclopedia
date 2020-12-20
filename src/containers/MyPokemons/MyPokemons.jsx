import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import { getPokemonsFromStorage } from "../../services/localstorage.service";
import List from "../../components/List/List";
import "./MyPokemons.scss";

const MyPokemons = () => {
  useEffect(() => {}, []);

  const pokemons = getPokemonsFromStorage();

  return (
    <React.Fragment>
      <Logo />
      <h1>Your Pokés</h1>
      {pokemons.length !== 0 ? (
        <div className="mypokemons-container">
          <List data={pokemons} type="detailCard" />
        </div>
      ) : (
        <div>
          <h3 className="no-poke">
            You have no pokés.
            <Link className="go-pick" to="/">
              &nbsp;Go pick some.
            </Link>
          </h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default MyPokemons;

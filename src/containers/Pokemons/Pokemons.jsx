import React, { useContext, useEffect } from "react";

import StoreContext from "../../context/StoreContext";
import { getPokemons } from "../../context/PokemonsAction";
import List from "../../components/List/List";
import Pagination from "../../components/Pagination/Pagination";
import Logo from "../../components/Logo/Logo";
import Loader from "../../components/Loader/Loader";

import "./Pokemons.scss";

const Pokemons = () => {
  const {
    state: { pokemons, loading, pageOffset },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    if (pokemons.results.length === 0) {
      getPokemons(pageOffset, dispatch);
    }
  }, []);

  return (
    <React.Fragment>
      <Logo />
      <h1>Pick a Poké</h1>
      {loading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <React.Fragment>
          <div className="pokemons-container">
            <List data={pokemons.results} type="card" />
          </div>
          <Pagination />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pokemons;

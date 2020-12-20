import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppRoute from "./AppRoute";
import MainLayout from "./containers/MainLayout/MainLayout";
import Pokemons from "./containers/Pokemons/Pokemons";
import MyPokemons from "./containers/MyPokemons/MyPokemons";
import PokemonCard from "./containers/PokemonCard/PokemonCard";
import PokemonsReducer from "./context/PokemonsReducer";
import StoreContext from "./context/StoreContext";

const App = () => {
  const initialState = useContext(StoreContext);
  const [state, dispatch] = useReducer(PokemonsReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={MainLayout} component={Pokemons} />
          <AppRoute exact path="/pokemon/:name" layout={MainLayout} component={PokemonCard} />
          <AppRoute exact path="/my-pokemons" layout={MainLayout} component={MyPokemons} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  );
};

export default App;

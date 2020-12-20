import { getAll } from "../services/generic.service";

export const getPokemons = (pageOffset, dispatch) => {
  dispatch({ type: "POKEMONS_LOADING", payload: true });
  getAll(pageOffset).then((result) => {
    dispatch({ type: "GET_POKEMONS", payload: result });
    dispatch({ type: "POKEMONS_LOADING", payload: false });
  });
};

export const renderPokemons = (pokemons, dispatch) => {
  dispatch({ type: "GET_POKEMONS", payload: pokemons });
};

export const resetPokemons = (dispatch) => {
  dispatch({ type: "POKEMONS_LOADING", payload: true });
  getAll(0).then((result) => {
    dispatch({ type: "GET_POKEMONS", payload: result });
    dispatch({ type: "POKEMONS_OFFSET", payload: 0 });
    dispatch({ type: "POKEMONS_LOADING", payload: false });
  });
};

export const offsetChange = (pageOffset, operator, dispatch) => {
  switch (operator) {
    case "-":
      dispatch({ type: "POKEMONS_OFFSET", payload: pageOffset - 20 });
      getPokemons(pageOffset - 20, dispatch);
      break;
    case "+":
      dispatch({ type: "POKEMONS_OFFSET", payload: pageOffset + 20 });
      getPokemons(pageOffset + 20, dispatch);
      break;
    default:
      dispatch({ type: "POKEMONS_OFFSET", payload: 0 });
      getPokemons(0, dispatch);
  }
};

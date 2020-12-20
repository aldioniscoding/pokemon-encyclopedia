const INITIAL_STATE = { pokemons: { results: [] }, pageOffset: 0, loading: false };

export default function PokemonsReducer(state, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokemons: action.payload };
    case "POKEMONS_LOADING":
      return { ...state, loading: action.payload };
    case "POKEMONS_OFFSET":
      return { ...state, pageOffset: action.payload };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
}

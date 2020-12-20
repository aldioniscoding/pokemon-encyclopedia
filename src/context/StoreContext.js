import { createContext } from "react";

const StoreContext = createContext({
  pokemons: { results: [] },
  pageOffset: 0,
  loading: false,
});

export default StoreContext;

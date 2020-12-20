import React, { useContext } from "react";

import StoreContext from "../../context/StoreContext";
import { offsetChange } from "../../context/PokemonsAction";

import "./Pagination.scss";

const Pagination = () => {
  const {
    state: { pokemons, pageOffset },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className="pagination">
      <button
        type="button"
        className={`${pokemons.previous === null && "disabled"}`}
        onClick={() => {
          offsetChange(pageOffset, "-", dispatch);
        }}
      >
        Previous
      </button>
      <button
        type="button"
        className={`${pokemons.next === null && "disabled"}`}
        onClick={() => {
          offsetChange(pageOffset, "+", dispatch);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

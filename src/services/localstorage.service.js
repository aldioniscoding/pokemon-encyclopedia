/* eslint-disable camelcase */
import { renderPokemons } from "../context/PokemonsAction";
import { getSingle } from "./generic.service";

export function getPokemonsFromStorage() {
  let myPokemons = [];
  if (localStorage.getItem("myPokemons") === null) {
    myPokemons = [];
  } else {
    myPokemons = JSON.parse(localStorage.getItem("myPokemons"));
  }
  return myPokemons;
}

export function isOnTheList(pokemon) {
  const myPokemons = getPokemonsFromStorage();
  let isMyPokemon = false;
  myPokemons.forEach((poke) => {
    if (poke.name === pokemon.name) {
      isMyPokemon = true;
    }
  });
  return isMyPokemon;
}

export async function addToLocalStorage(pokemon, state, dispatch) {
  const myPokemons = getPokemonsFromStorage();

  await getSingle(pokemon.name).then(({ name, height, weight, abilities, sprites, base_experience, types, stats }) => {
    myPokemons.splice(0, 0, { name, height, weight, abilities, sprites, base_experience, types, stats });
  });
  localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
  renderPokemons(state.pokemons, dispatch);
}

export function removeFromLocalStorage(pokemon, index, state, dispatch) {
  const myPokemons = getPokemonsFromStorage();

  myPokemons.forEach((poke) => {
    if (poke.name === pokemon.name) {
      myPokemons.splice(index, 1);
    }
  });
  localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
  renderPokemons(state.pokemons, dispatch);
}

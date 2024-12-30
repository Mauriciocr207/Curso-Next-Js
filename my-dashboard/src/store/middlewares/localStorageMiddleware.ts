import { Middleware } from "@reduxjs/toolkit";
import { toggleFavoritePokemon } from "@store/pokemons/pokemonsSlice";
import { RootState } from "..";

const localStorageMiddleware: Middleware = (state) => {
  return (next) => (action) => {
    next(action);
    if (toggleFavoritePokemon.match(action)) {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
    }
  };
};

export default localStorageMiddleware;

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const getIsLoading = (state: RootState) => state.pokemons.isLoading;
const getPokemons = (state: RootState) => state.pokemons.favorites;

export const getPokemonStateSelector = createSelector(
  [getPokemons, getIsLoading],
  (pokemons, isLoading) => ({
    pokemons: Object.values(pokemons),
    isLoading,
  })
);

export const isFavoriteSlector = (id: string) => createSelector([getPokemons], (pokemons) => !!pokemons[id]);
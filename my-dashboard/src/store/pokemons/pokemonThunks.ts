import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { setFavorites } from "./pokemonsSlice";
import { RootState } from "..";

export const getPokemonsInLocalStorage = () => {
    return (dispatch: ThunkDispatch<RootState, void, Action>) => {
        const favoritePokemons = JSON.parse(
          localStorage.getItem("favorite-pokemons") ?? "{}"
        );
        dispatch(setFavorites(favoritePokemons));
    };
}
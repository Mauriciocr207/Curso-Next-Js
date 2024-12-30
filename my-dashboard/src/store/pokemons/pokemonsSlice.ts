import { FavoritePokemons, PokemonSummary } from "@interfaces/";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  favorites: FavoritePokemons;
  isLoading: boolean;
}

const initialState: PokemonState = {
  favorites: {},
  isLoading: true,
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<FavoritePokemons>) => {
      state.favorites = action.payload;
      state.isLoading = false;
    },
    toggleFavoritePokemon: (state, action: PayloadAction<PokemonSummary>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

export const { toggleFavoritePokemon, setFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

"use client";

import { useAppSelector } from "@store/index";
import PokemonGrid from "./PokemonGrid";
import { getPokemonStateSelector } from "@store/pokemons/pokemonsSelectors";
import LoaderSpinner from "@components/common/LoaderSpinner";

export default function FavoritePokemons() {
  const { pokemons, isLoading } = useAppSelector(getPokemonStateSelector);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <LoaderSpinner />
        </div>
      ) : (
        <>
          {pokemons.length > 0 ? (
            <PokemonGrid pokemons={pokemons} />
          ) : (
            <p className="text-center text-gray-500 font-bold mt-10">
              No hay pokemones favoritos
            </p>
          )}
        </>
      )}
    </>
  );
}

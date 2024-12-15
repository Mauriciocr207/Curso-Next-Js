import { Pokemon, PokemonResponse, PokemonSummary } from "../interfaces";

export const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<PokemonSummary[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  const runError = false;
  if (runError) throw new Error("Error al obtener los pokemons");

  return pokemons;
};

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const pokemon: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60,
      }
    }
  ).then((res) => res.json());

  return pokemon;
};
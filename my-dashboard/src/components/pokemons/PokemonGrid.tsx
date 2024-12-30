import { PokemonSummary } from "@interfaces/";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonSummary[];
}

export default function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
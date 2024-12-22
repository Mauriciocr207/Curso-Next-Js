import { getPokemonByIdOrName } from "@/src/api/PokeApi";
import { capitalize } from "@/src/utils";
import { notFound } from "next/navigation";
import PokemonInfo from "@components/pokemons/PokemonInfo";

interface Props {
  params: { id: string };
}

export const generateStaticParams = async () => {
    const staticPokemons = Array.from({length: 150}).map((_, i) => ({id: `${i+1}`}));
    return staticPokemons;
}

export const generateMetadata = async ({ params }: Props) => {
  try {
    const { id, name } = await getPokemonByIdOrName(params.id);
    const capitalizedName = capitalize(name);

    return {
      title: capitalizedName,
      description: `Información del Pokémon ${capitalizedName}`,
      icons: {
        icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      },
    };
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const { id } = params;
  const pokemon = await getPokemonByIdOrName(id);
  return <PokemonInfo pokemon={pokemon} />;
}

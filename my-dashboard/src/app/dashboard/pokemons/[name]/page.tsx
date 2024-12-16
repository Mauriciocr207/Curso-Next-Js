import { getPokemonByIdOrName, getPokemons } from "@/src/api/PokeApi";
import PokemonInfo from "@/src/components/pokemons/PokemonInfo";
import { capitalize } from "@/src/utils";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

export const generateStaticParams = async () => {
  try {
    const staticPokemons = (await getPokemons(150)).map(({name}) => ({name}));
    return staticPokemons;
  } catch (error) {
    return [];
  }
};

export const generateMetadata = async ({ params }: Props) => {
  try {
    const { id, name } = await getPokemonByIdOrName(params.name);
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

export default async function PokemonSlugPage({params}: Props) {
  const { name } = params;
  const pokemon = await getPokemonByIdOrName(name);
  return <PokemonInfo pokemon={pokemon} />;
}

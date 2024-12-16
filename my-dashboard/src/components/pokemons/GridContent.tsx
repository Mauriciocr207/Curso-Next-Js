import { Pokemon } from "@/src/interfaces";
import Image from "next/image";

interface GridItem {
  title: string;
  content: React.ReactNode | string;
}

const gridContent = (pokemon: Pokemon): GridItem[] => {
  return [
    {
      title: "Types",
      content: (
        <div className="text-base font-medium text-navy-700 flex">
          {pokemon.types.map((type) => (
            <p key={type.slot} className="mr-2 capitalize">
              {type.type.name}
            </p>
          ))}
        </div>
      ),
    },
    {
      title: "Peso",
      content: (
        <span className="text-base font-medium text-navy-700 flex">
          {pokemon.weight}
        </span>
      ),
    },
    {
      title: "Regular Sprites",
      content: (
        <div className="flex justify-center">
          <Image
            src={pokemon.sprites.front_default}
            width={100}
            height={100}
            alt={`sprite ${pokemon.name}`}
          />

          <Image
            src={pokemon.sprites.back_default}
            width={100}
            height={100}
            alt={`sprite ${pokemon.name}`}
          />
        </div>
      ),
    },
    {
      title: "Shiny Sprites",
      content: (
        <div className="flex justify-center">
          <Image
            src={pokemon.sprites.front_shiny}
            width={100}
            height={100}
            alt={`sprite ${pokemon.name}`}
          />

          <Image
            src={pokemon.sprites.back_shiny}
            width={100}
            height={100}
            alt={`sprite ${pokemon.name}`}
          />
        </div>
      ),
    },
  ];
};

export default gridContent;

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { capitalize } from "@/src/utils";
import gridContent from "@/src/components/pokemons/GridContent";
import { Pokemon } from "@/src/interfaces";

interface Props {
    pokemon: Pokemon;
}

export default function PokemonInfo({pokemon}: Props) {
    return (
      <div className="flex flex-col items-center h-[100vh]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-clip-border shadow-3xl shadow-shadow-900 p-3">
          <div className="mt-2 mb-8 w-full">
            <h1 className="px-2 text-xl font-bold text-navy-700 ">
              {capitalize(pokemon.name)}
            </h1>
            <Link
              href="/dashboard/pokemons"
              className="mt-2 px-2 text-base text-gray-600 flex items-center gap-2"
            >
              <FaArrowLeftLong /> back to list
            </Link>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />

              <div className="flex flex-wrap">
                {pokemon.moves.map((move) => (
                  <p key={move.move.name} className="mr-2 capitalize">
                    {move.move.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            {gridContent(pokemon).map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border p-4  drop-shadow-lg"
              >
                <p className="text-sm text-gray-600">{item.title}</p>
                <div className="mt-2">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
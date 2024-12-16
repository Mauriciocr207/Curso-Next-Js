import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  id: string;
  name: string;
}

export default function PokemonCard({ id, name }: Props) {
  const getPokemonPathImg = (id: string) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="text-white absolute top-4 right-4 cursor-pointer hover:scale-125 hover:text-red-400 transition-all">
          <IoHeartOutline className="w-5 h-5" />
        </div>
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={getPokemonPathImg(id)}
            alt={name}
            width={100}
            height={100}
            className="h-24 w-24 text-white rounded-full mx-auto hover:scale-110 transition-transform"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              prefetch
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:text-gray-800 hover:bg-white transition-colors"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

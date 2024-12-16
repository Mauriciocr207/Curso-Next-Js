import Link from "next/link";

export default function NotFoundPokemon() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
        404
      </h1>
      <div className="bg-gray-800 text-white px-3 py-1 text-sm rounded rotate-12 absolute">
        Pokemon Not Found
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-gray-800 group focus:outline-none focus:ring">
          <span className="absolute bg-gray-800 inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="text-gray-800 bg-white relative block px-8 py-3 border border-current">
            <Link href="/dashboard/pokemons">Go to dashboard</Link>
          </span>
        </div>
      </button>
    </div>
  );
}
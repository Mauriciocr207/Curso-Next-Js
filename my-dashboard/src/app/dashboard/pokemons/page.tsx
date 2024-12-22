import { getPokemons } from "@/src/api/PokeApi";
import { PokemonGrid } from "@components/pokemons";

export const metadata = {
    title: '151 Pokemons',
    description: 'Listado de los 151 Pokémons originales',
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons();

    return (
        <div>
            <h1 className="font-bold text-lg">Listado de Pokémons estático</h1>
            <PokemonGrid pokemons={pokemons} />
        </div>
    ); 
}
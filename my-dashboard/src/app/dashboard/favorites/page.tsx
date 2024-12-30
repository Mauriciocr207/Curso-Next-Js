import FavoritePokemons from "@components/pokemons/FavoritePokemons";

export const metadata = {
    title: 'Favoritos',
    description: 'Listado de los 151 Pokémons originales',
}

export default async function FavoritesPage() {
    return (
        <div>
            <h1 className="font-bold text-lg">Listado de Pokémons favoritos <small className="text-blue-500">Global State</small></h1>
            <FavoritePokemons/>
        </div>
    ); 
}
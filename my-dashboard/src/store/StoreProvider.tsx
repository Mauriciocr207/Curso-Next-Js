'use client'

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { getPokemonsInLocalStorage } from "./pokemons/pokemonThunks";

interface Props {
    children: React.ReactNode;
}

export default function StoreProvider({children}: Props) {
    useEffect(() => {
      store.dispatch(getPokemonsInLocalStorage());
    }, []);
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
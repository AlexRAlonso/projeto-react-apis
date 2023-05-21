import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { PokemonProvider } from "../Contexts/PokemonContext";
import { useState } from "react";

export default function Router() {
 
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Header />
        <Routes>
          <Route element={<PokemonListPage />} path="/" />
          <Route
            element={<PokedexPage />}
            path="/pokedex"
          />
          <Route element={<PokemonDetailPage />} path="/detail/:id" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

export default function Router() {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokeList();
  }, []);

  const fetchPokeList = async () => {
    try {
      const apiResponse = await axios.get(BASE_URL);
      setPokeList(apiResponse.data.results);
    } catch (error) {
      console.log("Não achei nenhum pokémon!");
      console.log(error.response);
    }
  };

  const capture = (capturee) => {
    const capturedCheck = pokedex.find(
      (captured) => captured.name === capturee.name
    );

    if (!capturedCheck) {
      const updatedPokedex = [...pokedex, capturee];
      setPokedex(updatedPokedex);
    }
  }

  const free = (toBeFreed) => {
    const updatedPokedex = pokedex.filter(
      (captured) => captured.name !== toBeFreed.name
    );

    setPokedex(updatedPokedex);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PokemonListPage 
          pokeList={pokeList}
          capture={capture}
          pokedex={pokedex}          
          /> 
          } path="/"
          />
        <Route element={<PokedexPage 
          pokedex={pokedex}
          free={free}
          />
          } path="/pokedex"
          />
        <Route element={<PokemonDetailPage />} path="/detail/:id" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
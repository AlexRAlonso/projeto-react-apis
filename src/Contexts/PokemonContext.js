import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const savedPokeList = localStorage.getItem("pokeList");
    if (savedPokeList) {
      setPokeList(JSON.parse(savedPokeList));
    } else {
      fetchPokeList();
    }
  }, []);

  useEffect(() => {
    if (pokeList.length) {
      localStorage.setItem("pokeList", JSON.stringify(pokeList));
    }
  }, [pokeList]);

  const fetchPokeList = async () => {
    try {
      const response = await axios.get(BASE_URL);
      populatePokeList(response.data.results);
    } catch (error) {
      console.log("Não achei nenhum pokémon!");
      console.log(error.response);
    }
  };

  const populatePokeList = async (pokeList) => {
    const promises = pokeList.map(async (pokemon) => {
      try {
        const pokeRes = await axios.get(pokemon.url);
        const specRes = await axios.get(pokeRes.data.species.url);

        return {
          id: forceLeadingZeros(pokeRes.data.id),
          name: getCapitalizedName(pokeRes.data.name),
          sprite:
            pokeRes.data.sprites?.other?.["official-artwork"]?.front_default,
          spriteFront: pokeRes.data.sprites?.front_default,
          spriteBack: pokeRes.data.sprites?.back_default,
          color: specRes.data.color.name,
          types: pokeRes.data.types.map((data) => data.type),
          moves: pokeRes.data.moves
            .filter((moveData) =>
              moveData.version_group_details.find(
                (version_group_detail) =>
                  version_group_detail.version_group.name === "red-blue"
              )
            )
            .map((moveData) => {
              return {
                key: moveData.move.name,
                name: moveData.move.name,
              };
            }),
          stats: pokeRes.data.stats.map((data) => {
            return {
              name: data.stat.name,
              value: data.base_stat,
            };
          }),
        };
      } catch {}
    });

    const resolvedPromises = await Promise.all(promises);
    setPokeList(resolvedPromises);
  };

  const getCapitalizedName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  function forceLeadingZeros(id) {
    return String(id).padStart(3, "0");
  }

  return (
    <PokemonContext.Provider
      value={{ pokeList, setPokeList, pokedex, setPokedex }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

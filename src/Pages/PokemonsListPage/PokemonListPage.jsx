import { PokemonListContainer } from "./PokemonListPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../Contexts/PokemonContext";
import PopUp from "../../Components/PopUp/PopUp"

const PokemonList = () => {
  const [popUp, setPopUp] = useState(false);
  const { pokeList, pokedex, setPokedex } = useContext(PokemonContext)

  const filteredPokelist = () => {
    return pokeList.filter(
      (pokemonInList) =>
        !pokedex.find((captured) => pokemonInList.id === captured.id)
    );
  }

  const capture = (capturee) => {
    const capturedCheck = pokedex.find(
      (captured) => captured.name === capturee.name
    );

    if (!capturedCheck) {
      const updatedPokedex = [...pokedex, capturee];
      setPokedex(updatedPokedex);
      setPopUp(true)
    }
  };

  return (
    <PokemonListContainer>
      {popUp && <PopUp setPopUp={setPopUp}/>}
      <div>
        <h2>Todos os Pokémons</h2>
      </div>
      <div className="pokemons-list">
        {filteredPokelist().map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} capture={capture} />
        ))}
      </div>
    </PokemonListContainer>
  );
};

export default PokemonList;

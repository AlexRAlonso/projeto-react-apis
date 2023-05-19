import { PokemonListContainer } from "./PokemonListPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import PopUp from "../../Components/PopUp/PopUp";
import { useState } from "react";

const PokemonList = (props) => {
  const [popUp, setPopUp] = useState(false);
  const { pokeList, pokedex, setPokedex } = props;

  const filteredPokelist = () =>
    pokeList.filter(
      (pokemonInList) =>
        !pokedex.find((captured) => pokemonInList.url === captured.url)
    );

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
          <PokemonCard key={pokemon.name} url={pokemon.url} capture={capture} />
        ))}
      </div>
    </PokemonListContainer>
  );
};

export default PokemonList;

import React, { useContext, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "../PokemonsListPage/PokemonListPageStyle";
import PopUp from "../../Components/PopUp/PopUp";

const Pokedex = (props) => {
  const [popUp, setPopUp] = useState(false);
  const { pokedex, setPokedex } = props;

  const free = (toBeFreed) => {
    const updatedPokedex = pokedex.filter(
      (captured) => captured.name !== toBeFreed.name
    );

    setPokedex(updatedPokedex);
    setPopUp(true);
  }

  return (
    <PokemonListContainer>
      {popUp && <PopUp setPopUp={setPopUp}/>}
      <div>
        <h2>Meus Pokémons</h2>
      </div>
      <div className="pokemons-list">
        {pokedex?.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            url={pokemon.url}
            free={free}
          />
        ))}
      </div>
    </PokemonListContainer>
  );
};

export default Pokedex;

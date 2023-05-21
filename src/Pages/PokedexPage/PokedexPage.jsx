import React, { useContext, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "../PokemonsListPage/PokemonListPageStyle";
import { PokemonContext } from "../../Contexts/PokemonContext";
import PopUp from "../../Components/PopUp/PopUp"

const Pokedex = () => {
  const [popUp, setPopUp] = useState(false);
  const { pokedex, setPokedex } = useContext(PokemonContext);

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
            pokemon={pokemon}
            free={free}
          />
        ))}
      </div>
    </PokemonListContainer>
  );
};

export default Pokedex;

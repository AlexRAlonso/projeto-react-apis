import React from "react";
import { PokedexContainer } from "./PokedexPageStyle";

const Pokedex = () => {
  return (
    <PokedexContainer>
      <div>
        <h3>Meus Pokémons</h3>
      </div>
      <div className="pokemons-list">

      </div>
    </PokedexContainer>
  );
};

export default Pokedex;

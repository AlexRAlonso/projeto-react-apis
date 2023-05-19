import React, { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "../PokemonsListPage/PokemonListPageStyle";

const Pokedex = (props) => {
  const { pokedex, free } = props;

  return (
    <PokemonListContainer>
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

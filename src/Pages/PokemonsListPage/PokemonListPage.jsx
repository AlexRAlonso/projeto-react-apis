import { PokemonListContainer } from "./PokemonListPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokemonList = (props) => {
  const { pokeList, capture, pokedex } = props;
  
  const filteredPokelist = () =>
    pokeList.filter(
      (pokemonInList) =>
      !pokedex.find(
        (captured) => pokemonInList.name === captured.name
      ) 
    );

  return (
    <PokemonListContainer>
      <div>
        <h2>Todos os Pokémons</h2>
      </div>
      <div className="pokemons-list">
        {filteredPokelist().map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            url={pokemon.url}
            capture={capture}
          />
        ))}
      </div>
    </PokemonListContainer>
  );
};

export default PokemonList;

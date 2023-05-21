import React, { useEffect, useState } from "react";
import { DetailContainer } from "./PokemonDetailPageStyle";
import { useParams } from "react-router-dom";
import PokemonStat from "../../Components/PokemonStats/PokemonStat";
import PokemonType from "../../Components/PokemonType/PokemonType";

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const savedPokeList = localStorage.getItem("pokeList");
    if (savedPokeList) {
      const pokeList = JSON.parse(savedPokeList);
      const foundPokemon = pokeList.find(
        (pokemon) => parseInt(pokemon.id) === parseInt(id)
      );
      if (foundPokemon) {
        setPokemon(foundPokemon);
      }
    }
  }, []);

  return (
    <DetailContainer>
      <div>
        <h1>Detalhes do Pokémon</h1>
      </div>

      <div className="pokemon-detail">
        <div className="detail-sprites">
          <div>
            <img className="detail-sprite" src={pokemon.spriteFront} />
          </div>
          <div>
            <img className="detail-sprite" src={pokemon.spriteBack} />
          </div>
        </div>

        <div className="base-stats">
          <h2>Base Stats</h2>
          {pokemon.stats?.map((stat) => {
            return (
              <PokemonStat
                key={stat.name}
                name={stat.name}
                value={stat.value}
              />
            );
          })}
        </div>

        <div className="cardtop-and-moves">
          <div className="cardtop">
            <div className="infos">
              <p>#{pokemon.id}</p>
              <h2>{pokemon.name}</h2>
              <div className="types">
                {pokemon.types?.map((type) => (
                  <PokemonType key={type.name} url={type.url} />
                ))}
              </div>
            </div>

            <div>
              <img className="sprite" src={pokemon.sprite} />
            </div>
          </div>

          <div className="moves">
            <div>
              <h2>Moves</h2>
            </div>
            <div className="moves-list">
              {pokemon.moves?.slice(0, 5).map((move) => (
                <p key={move.key} className="move-name">
                  {move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DetailContainer>
  );
};

export default PokemonDetail;

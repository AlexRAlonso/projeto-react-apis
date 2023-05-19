import React, { useEffect, useState } from "react";
import { PokemonCardContainer } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/coordinator";
import axios from "axios";
import PokemonType from "../PokemonType/PokemonType";

function PokemonCard(props) {
  const { url, capture, free } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const pokemonResponse = await axios.get(url);
      const speciesResponse = await axios.get(pokemonResponse.data.species.url);
      setPokemon({
        id: forceLeadingZeros(pokemonResponse.data.id),
        name: getCapitalizedName(pokemonResponse.data.name),
        url,
        sprite:
          pokemonResponse.data.sprites?.other?.["official-artwork"]
            ?.front_default,
        color: speciesResponse.data.color.name,
        types: pokemonResponse.data.types.map((data) => data.type),
      });
    } catch (error) {
      console.log("Não achei nenhum pokémon!");
      console.log(error.response);
    }
  };

  const getCapitalizedName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  function forceLeadingZeros(id) {
    return String(id).padStart(3, "0");
  }

  return (
    <PokemonCardContainer className={pokemon.color}>
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

      <div className="buttons">
        <button
          className="details-button"
          onClick={() => {
            goToDetail(navigate, Number(pokemon.id));
          }}
        >
          Detalhes
        </button>

        <div>
          {location.pathname === "/" && (
            <button className="capture-button" onClick={() => capture(pokemon)}>
              Capturar!
            </button>
          )}
          {location.pathname !== "/" && (
            <button className="free-button" onClick={() => free(pokemon)}>
              Libertar!
            </button>
          )}
        </div>        
      </div>
    </PokemonCardContainer>
  );
}

export default PokemonCard;

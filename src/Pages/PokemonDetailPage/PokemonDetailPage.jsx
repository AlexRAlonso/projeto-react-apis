import React, { useEffect, useState } from "react";
import { DetailContainer } from "./PokemonDetailPageStyle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const pokemonResponse = await axios.get(`${BASE_URL}/${id}`);
      setPokemon({
        id: forceLeadingZeros(pokemonResponse.data.id),
        name: getCapitalizedName(pokemonResponse.data.name),
        spriteFront: pokemonResponse.data.sprites?.front_default,
        spriteBack: pokemonResponse.data.sprites?.back_default,
        types: pokemonResponse.data.types.map(
          (data) => data.type
        ),
        moves: pokemonResponse.data.moves
      });
            
    } catch (error) {
      console.log("Não achei nenhum pokémon!");
      console.log(error.response);
    }
  };

  const getCapitalizedName = (name) => {
    return name.charAt(0).toUpperCase() +
      name.slice(1);
  }

  function forceLeadingZeros(id) {
    return String(id).padStart(3, '0');
  }
  
  return (
    <DetailContainer>
      <div>
        <h3>Detalhes do Pokémon</h3>
      </div>
      <div className="pokemon-detail">
        <p>{pokemon.name}</p>
      </div>
    </DetailContainer>
  );
};

export default PokemonDetail;
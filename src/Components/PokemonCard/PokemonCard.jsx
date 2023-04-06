import React from "react";
import { PokemonCardContainer } from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/coordinator";

function PokemonCard() {
  const navigate = useNavigate();

  return (
    <PokemonCardContainer>
      <p>Eu sou um pokémon!</p>
      <button className="details-button" onClick={() => {goToDetail(navigate)}}>Detalhes</button>
    </PokemonCardContainer>
  );
}

export default PokemonCard;

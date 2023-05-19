import React, { useEffect, useState } from "react";
import { PokemonTypeContainer } from "./PokemonTypeStyle";
import axios from "axios";

function PokemonType(props) {
  const {url} = props;

  const [type, setType] = useState({});

  useEffect(() => {
    fetchType();
  }, []);

  const fetchType = async () => {
    try {
      const apiResponse = await axios.get(url);
      setType({
        name: getCapitalizedName(apiResponse.data.name),
        icon: apiResponse.data.sprites?.front_default,
      });
    } catch (error) {
      console.log("Não achei nenhum tipo!");
      console.log(error.response);
    }
  };

  const getCapitalizedName = (name) => {
    return name.charAt(0).toUpperCase() +
      name.slice(1);
  }

  return (
    <PokemonTypeContainer className={type.name}>
     <p>{type.name}</p>
    </PokemonTypeContainer>
  );
}

export default PokemonType;

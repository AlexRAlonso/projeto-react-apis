import React from "react";
import { PokemonStatContainer } from "./PokemonStatStyle";

function PokemonStat(props) {
  const { name, value } = props;
  
  const getCapitalizedName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <PokemonStatContainer>
      <div className="row">
        <div className="stat-name">
          <p>{getCapitalizedName(name)}</p>
        </div>
        <div className="stat-value">
          <p>{value}</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${value}%` }}></div>
        <span className="percentage">{value}%</span>
      </div>
    </PokemonStatContainer>
  );
}

export default PokemonStat;

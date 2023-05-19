import styled from "styled-components";

export const PokemonListContainer = styled.div`
  background-color: #5d5d5d;
  color: white;
  padding: 2vw;
  min-height: 85vh;
  font-size: 100%;

  .pokemons-list {
    margin-top: 4vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1vw;
  };

  .green {
    background-color:#729f92;
  }

  .yellow, .white {
    background-color:#76a866;
  }

  .red {
    background-color:#eaab7d;
  }

  .blue {
    background-color:#71c3ff;
  }

  .brown, .purple {
    background-color:#bf9762;
  }
`;

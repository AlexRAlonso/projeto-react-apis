import styled from "styled-components";
import typegrass from "../../Assets/type-grass.png"
import typepoison from "../../Assets/type-poison.png"
import typefire from "../../Assets/type-fire.png"
import typenormal from "../../Assets/type-normal.png"
import typewater from "../../Assets/type-water.png"
import typebug from "../../Assets/type-bug.png"
import typeflying from "../../Assets/type-fly.png"

export const PokemonCardContainer = styled.div`
  border-radius: 10px;
  padding: 14px;
  width: 360px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cardtop {
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .details-button {
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: underline;
    font-size: 1em;
    font-weight: bold;
    color: white;
  }

  .capture-button {
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    padding: 8px;
    width: 120px;
    border: none;
  }

  .free-button {
    cursor: pointer;
    border-radius: 5px;
    background-color: #ff6262;
    color: white;
    padding: 8px;
    width: 120px;
    border: none;
  }

  .infos {
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  .sprite {
    max-width: 8em;
  }

  .types {
    display: flex;
  }

  .Grass {
    background-color: #63bb5b;
    background-image: url(${typegrass});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Poison {
    background-color: #ab6ac8;
    background-image: url(${typepoison});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Fire {
    background-color: #ff9c54;
    background-image: url(${typefire});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Flying {
    background-color: #8fa8dd;
    background-image: url(${typeflying});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Water {
    background-color: #4d90d5;
    background-image: url(${typewater});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Bug {
    background-color: #90c12c;
    background-image: url(${typebug});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .Normal {
    background-color: #9099a1;
    background-image: url(${typenormal});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;


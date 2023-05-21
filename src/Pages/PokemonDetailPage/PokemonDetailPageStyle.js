import styled from "styled-components";
import typegrass from "../../Assets/type-grass.png"
import typepoison from "../../Assets/type-poison.png"
import typefire from "../../Assets/type-fire.png"
import typenormal from "../../Assets/type-normal.png"
import typewater from "../../Assets/type-water.png"
import typebug from "../../Assets/type-bug.png"
import typeflying from "../../Assets/type-fly.png"

export const DetailContainer = styled.div`
  background-color: #5d5d5d;
  color: white;
  padding: 2vw;
  min-height: 100vh;


  .pokemon-detail {
    background-color: #739f92;
    padding: 20px;
    border-radius: 20px;
    margin-top: 4vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  };

  .detail-sprite {
    background-color: white;
    border-radius: 5px;
    height: 160px;
    margin: 20px;
  }

  .base-stats {
    background-color: white;
    border-radius: 5px;
    color: black;
    margin: 20px;
    padding: 20px;
  }

  .moves {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    width: 16vw;
    max-height: 60vh;
  }

  .moves-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 60vh;
  }

  .move-name {
    padding: 5px;
    margin-top: 10px;
    height: 1.5em;
    max-width: 10vw;
    background-color: lightgray;
    color: black;
    border: dotted grey 1px;
    border-radius: 10px
  }  

  .cardtop {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    height: 20vh;
  }

  .infos {
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  .sprite {
    max-width: 6em;
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


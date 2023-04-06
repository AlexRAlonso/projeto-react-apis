import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-bottom: 1px solid black;
  height: 10vh;

  .header-pokedex {
    display: flex;
    justify-content: center;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .pokedex-button {
    border: none;
    background-color: #33a3f5;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    width: 12em;
    padding: 0.8em;
    border-radius: 5px;
    cursor: pointer;
  }

  .list-button {
    background-color: transparent;
    border: none;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.7em;
    width: 12em;
    margin-left: 1.5vw;
    text-align: center;
    cursor: pointer;
  }

  .list-link:visited {
    color: black
  }
`;

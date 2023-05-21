import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;

  .inner-popup-container {
    border-radius: 10px;
    padding: 14px;
    width: 360px;
    height: 160px;
    background-color: white;
    position: absolute;
    margin-left: 34%;
    color: black;
  }

  .popup {
    margin-top: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }

  .popup-button {
    cursor: pointer;
    border: solid black 1px;
    border-radius: 5px;
    width: 20%;
    height: 2em;
    margin-top: 30px;
    background: none;
    font-size: 1em;
    font-weight: bold;
    color: black;
  }
`;

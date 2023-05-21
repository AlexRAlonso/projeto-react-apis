import styled from "styled-components";

export const PokemonStatContainer = styled.div`
  border-radius: 5px;
  padding: 6px;
  margin-right: 10px;
  margin-top: 10px;
  width: 500px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  border-bottom: solid 1px lightgray;

  .row {
    width: 12vw;
    padding: 0 10px 0 0;
    display: flex;
    justify-content: space-between;
  }

  .stat-name {
    width: 20vw;
    color: darkgray;
    font-weight: bold;
  }

  .stat-value {
    color: black;
    font-weight: bold;
  }

  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    position: relative;
  }
  
  .progress {
    height: 100%;
    background-color: #007bff;
    border-radius: 10px;
  }
  
  .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
  }
`;

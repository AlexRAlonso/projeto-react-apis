import styled from "styled-components";

export const PopUpContainer = styled.div`
  border-radius: 10px;
  padding: 14px;
  width: 360px;
  height: 160px;
  background-color: white;
  position: absolute;
  margin-left: 34%;
  color: black;

  .popup {
    margin-top: 20px;
    height: 100px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-weight: bold;
  }
`;

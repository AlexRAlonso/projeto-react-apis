import React from "react";
import { PopUpContainer } from "./PopUpStyle";
import { useLocation } from "react-router-dom";

function PopUp(props) {
  const { setPopUp } = props;
  const location = useLocation();

  return (
    <PopUpContainer>
      <div>
        {location.pathname === "/" && (
          <div className="popup">
            <div>
              <h1>Gotcha!</h1>
            </div>
            <div>
              <p>O pokémon foi adicionado à Pokédex</p>
            </div>
            <button onClick={() => setPopUp(false)}>Ok!</button>
          </div>
        )}
        {location.pathname !== "/" && (
          <div className="popup">
            <div>
              <h1>Adeus!</h1>
            </div>
            <div>
              <p>O pokémon foi devolvido à natureza</p>
            </div>
            <button onClick={() => setPopUp(false)}>Ok!</button>
          </div>
        )}
      </div>
    </PopUpContainer>
  );
}

export default PopUp;

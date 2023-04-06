import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle";
import { goToList, goToPokedex } from "../../Routes/coordinator";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderContainer>
      <div>
        {location.pathname !== "/" && (
          <button
            onClick={() => {
              goToList(navigate);
            }}
            className="list-button"
          >
            ❮ <u>Todos os Pokémons</u>
          </button>
        )}
      </div>
      <div className="logo">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
          alt="Logo Pokémon"
          width={150}
          height={50}
        />
      </div>
      <div className="header-pokedex">
        {location.pathname !== "/pokedex" && (
          <button
            onClick={() => {
              goToPokedex(navigate);
            }}
            className="pokedex-button"
          >
            Pokédex
          </button>
        )}
      </div>
    </HeaderContainer>
  );
}

export default Header;

/* function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <div>
        {location.pathname !== "/" && <Link className= "list-link" to="/">❮ <u>Todos os Pokémons</u></Link>}
      </div>
      <div className= "logo">
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="Logo Pokémon" width={150} height={50}/>
      </div>
      <div className = "header-button">
        {location.pathname === "/" && <Link className = "pokedex-link" to="/pokedex">Pokédex</Link>}
      </div>
    </HeaderContainer>
  );
}

export default Header; */

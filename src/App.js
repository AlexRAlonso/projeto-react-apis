import React from "react";
import Router from "./Routes/Router";
import { PokemonContext } from "./Contexts/PokemonContext";

function App() {
  return (
    <>
      <PokemonContext.Provider value={""}>
        <Router/>
      </PokemonContext.Provider>
    </>
  );
}

export default App;

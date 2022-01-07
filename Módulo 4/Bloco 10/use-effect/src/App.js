import React from "react";

//* Import Hoosk
import { useState, useEffect } from "react";
//*----------------------------------------------------------------

//* Import Dependencies
import axios from "axios";
//* ----------------------------------------------------------------

//* Import Components
import PokerCards from "./components/PokerCard";
//* ----------------------------------------------------------------

//* Import Global Styles
import { GlobalStyles } from "./style/styleGlobal";
//*----------------------------------------------------------------


function App() {

  //* States
  const [ pokeList, setPokeList ] = useState( [] );
  const [ pokeName, setPokeName ] = useState( "" );
  //*------------------------------------------------------------------------------

  //* Api de Pokemons
  const getApiPokemons =  async( ) => {

    await axios.get( "https://pokeapi.co/api/v2/pokemon/?limit=151" )
    .then(({ data }) => {
      setPokeList( data.results )
    });

  };
  //*-------------------------------------------------------------------------------

  //* Iniciando a Api assim que a aplicação comçá
  useEffect(() => {
    getApiPokemons();
  }, []);
  //*-------------------------------------------------------------------------------

const handlerPokeName = ( evente ) => {
  setPokeName( evente.target.value );
};

  return (

    <div>

      <h1>Lista de Pokemóns</h1>
      
      {/* Select Pokemons */}
      <select onChange={handlerPokeName}>

        <option value={ "" }>Nenhum</option>

        {/* Render Lista de Pokemons */}
        { pokeList.map( pokemon => {
          return (

            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>

          );
        })}

      </select>

      {/* Verificando si á um Pokemon */}

      {
        pokeName && <PokerCards pokemon={pokeName} />
      }

      <GlobalStyles />
    </div>

  );
};

export default App;;

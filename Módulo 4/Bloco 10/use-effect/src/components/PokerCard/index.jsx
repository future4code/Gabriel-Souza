import React from "react";

//* Import Hooks
import { useState, useEffect } from "react";
//*----------------------------------------------------------------

//* Import Axios
import axios from "axios";
//*----------------------------------------------------------------

const PokerCards = ({ pokemon }) => {

    const [ pokemons, setPokemons ] = useState( {} );

    const getPokemon = ( pokeName ) => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(({ data }) => {
                setPokemons( data )
        });
    };

    useEffect(() => {
        getPokemon(pokemon)
    }, [pokemon]);

    useEffect(() =>{
        console.log( pokemons );
    },[pokemons]);
    
    return (

        <div>

             <p>{pokemons.name}</p>
             <p>{pokemons.weight} Kg</p>

            {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
            {pokemons.sprites && (
            <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            )}

        </div>

    );
};

export default PokerCards;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({pokemonUrl}) => {

    const [ pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div>
            <h3>{pokemon.name}</h3>
            
        </div>
    );
};

export default PokemonCard;
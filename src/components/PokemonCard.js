import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const [ pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])


    return (
        <div className='card' onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites?.front_default} alt="" />
        </div>
    ); 
};

export default PokemonCard;
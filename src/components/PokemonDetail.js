import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`) 
            .then(res => setPokemon(res.data) )
    }, [])


    return (
        <div>
            <h1>Pokemon Detail</h1>
            <p>Accediendo al pokemon con id: <b>{id}</b></p>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonDetail;
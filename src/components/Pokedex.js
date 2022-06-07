import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res => setCharacters(res.data.results));
    }, [])

    console.log(characters)

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {user}, here you can find your favorite pokemon</p>
            {
                characters.map(pokemon => (
                    <PokemonCard pokemonUrl={pokemon.url} />
                ))
            }
        </div>
    );
};

export default Pokedex;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [ pokemonSearch, setPokemonSearch] = useState("");
    const [ characters, setCharacters ] = useState([]);
    const [ pokemonType, setPokemonType ] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res => setCharacters(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setPokemonType(res.data.results))

    }, [])

    console.log(characters)


    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemonType = e => {
        axios.get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {user}, here you can find your favorite pokemon</p>
            <select onChange={filterPokemonType}>
                {
                    pokemonType.map((pokemon) => (
                        <option value={pokemon.url}>{pokemon.name} </option>
                    ))
                }

            </select>
            <form className="search-box">
                <input 
                    type="text" 
                    value={pokemonSearch} 
                    onChange={e => setPokemonSearch(e.target.value)}
                    placeholder="buscar personaje" 
                />
                <button onClick={search} >Buscar</button>
            </form>
            {
                characters.map((pokemon) => ( 
                    <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
                ))
            }
        </div>
    );
};

export default Pokedex;
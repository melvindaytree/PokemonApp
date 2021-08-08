import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useFetchPokemonQuery, useGetPokemonByNameQuery } from './pokeApiSlice'

interface abil {

}

const PokePage = ({ match }) => {
    const {
      params: { pokeID },
    } = match

    const { data: poke, isFetching, isLoading } = useGetPokemonByNameQuery(pokeID)

    let abilities = poke?.abilities
    
    let imgurl = poke?.sprites.front_default
    console.log(imgurl)

    if (isLoading) return <div>Loading...</div>

    return(
        <div>
            
            {isFetching ? '...refetching' : ''}
            <p>Name: {poke?.name}</p>
            <p>Height: {poke?.height}</p>
            <p>Abilties: {abilities?.map((abil) =>
                <li key={abil.ability.name}>{abil.ability.name}</li>
            )}</p>
            <img src={imgurl} />
        </div>
    )

}

export default PokePage
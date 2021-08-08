import React, { useState, useEffect } from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { useGetPokemonByNameQuery } from '../pokeApiSlice'
import { getRandomInt, capitalizeFirstLetter } from '../../utils/utils'
import './PokeTeam.css'


function GenerateTeam(props) {
    let [PokeTeamArray, setPokeTeamArray] = useState([])
    let PokeTeamObject = {}

    const dispatch = useAppDispatch();



    console.log(PokeTeamArray)
     const { data: pokemon, isFetching, isLoading } = useGetPokemonByNameQuery(props.pokemonName)

     
    let imgurl = pokemon?.sprites.front_default
    console.log(imgurl)
    // let PokeNameCapital = if (!pokemon) return capitalizeFirstLetter(pokemon?.name)


    //if (isLoading) return <div>Loading...</div>
    {isFetching ? '...Fetching Team' : ''}

    return(

        
        <div className="poketeambox">
             <p>{pokemon?.name}</p>
             <p>Id: {pokemon?.id}</p>
            <p>Height: {pokemon?.height}</p>
            <p>Weight: {pokemon?.weight}</p>
            <img src={imgurl} alt={pokemon?.name}/>
        </div>
    )


}

export default GenerateTeam
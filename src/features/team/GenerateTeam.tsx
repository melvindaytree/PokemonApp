import React, { useState, useEffect } from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { useGetPokemonByIdQuery } from '../pokeApiSlice'
import { getRandomInt, capitalizeFirstLetter } from '../../utils/utils'
import PokeTeam from '../selection/PokeTeam'
import './PokeTeam.css'
import '../selection/PokeGrid.css'


function GenerateTeam() {
    let [PokeTeamArray, setPokeTeamArray] = useState([getRandomInt(1,850)])
    let PokeTeamObject = {}

    const dispatch = useAppDispatch();

    const { data: pokemon, isFetching, isLoading } = useGetPokemonByIdQuery(PokeTeamArray[0])

    let imgurl = pokemon?.sprites.front_default
    
    // let PokeNameCapital = if (!pokemon) return capitalizeFirstLetter(pokemon?.name)


    //if (isLoading) return <div>Loading...</div>
    {isFetching ? '...Fetching Team' : ''}

    return(

        
        <div className="poketeambox">
             <h3 className="pokegridboxtitle">{pokemon?.name}</h3>
             <p>Id: {pokemon?.id}</p>
            {/* <p>Height: {pokemon?.height}</p>
            <p>Weight: {pokemon?.weight}</p> */}
            <img src={imgurl} alt={pokemon?.name}/>
        </div>
    )


}

export default GenerateTeam
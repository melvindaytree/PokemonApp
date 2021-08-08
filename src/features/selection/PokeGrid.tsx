import React, { useState } from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { useFetchPokemonQuery,useGetPokemonByNameQuery } from '../pokeApiSlice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './PokeGrid.css'
import PokeGridCircle from './PokeGridCircle'
import { addPokemon } from './teamSelectSlice'

 function PokeGrid(props) {
    const userPokeTeam = useAppSelector((state) => state.teamSelect);
    const dispatch = useAppDispatch();
  
    const { data = [] , isFetching } = useFetchPokemonQuery(150);
  
    console.log(data);
  
     let dataResult = data?.results;

     const handleClickAddPokemon = (name) => {
      //increment by one
      console.log(name)
      dispatch(addPokemon(name));
      console.log(userPokeTeam)
    }

    console.log(userPokeTeam)

    return (
        <div className="container">
          <h2>Search for Pokemon</h2>
            <input type="text" name="name" onChange={(e)=> setPokePlayerName(String(e.target.value))} />
        <ul>
        {dataResult?.map((pokemon) => (
              
                  <div key={pokemon.name} className="pokecell">

                    <Link to={`/pokePage/${pokemon.name}`} className="linkpokeheader">
                      <PokeGridCircle name={pokemon.name} keyprop={pokemon.name} />
                    </Link>

                    <button id={pokemon.name} onClick={(e) => handleClickAddPokemon(e.target.id)} className="addbutton">Add +</button>
                  </div>
            ))}

           
        </ul>

      </div>

    )

          
   
 }    

export default PokeGrid

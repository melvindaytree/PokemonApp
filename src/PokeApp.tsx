import React, { useState } from 'react'
import {useAppDispatch, useAppSelector} from './app/hooks'
import { useFetchPokemonQuery,useGetPokemonByNameQuery } from './features/pokeApiSlice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './css/PokeApp.css'
import PlayerName from './features/selection/PlayerName'
import PokeTeam from './features/selection/PokeTeam'
import PokeGrid from './features/selection/PokeGrid'
import GenerateTeam from './features/team/GenerateTeam'
import NavBar from './components/header/navbar'


function PokeApp() {

  const userPokeTeam = useAppSelector((state) => state.teamSelect.playerName);

    return(
          <div>
            <NavBar />
            <h1>Welcome !!! {userPokeTeam} !!! to the Pokemon Battle App</h1>
            <PlayerName />
            <h3>Please select your team</h3>

            
              <PokeTeam /> 
              
                        
              <PokeGrid />
            </div>
  
    )
  
  
  }
  
  
  export default PokeApp
  
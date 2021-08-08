import React, { useState } from 'react'
import GenerateTeam from './GenerateTeam'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import NavBar from '../../components/header/navbar'
import PokeTeam from '../selection/PokeTeam'
import './PokeTeam.css'
import Battle from '../fight/Battle'


function PokeApp() {

    const userPokeTeam = useAppSelector((state) => state.teamSelect);
    const userName = useAppSelector((state) => state.teamSelect.playerName);

    const [pokemonIsDead, setPokemonIsDead] = useState(false)
  
    return(
          <div>
              <NavBar />
            <h1>These are your Opponents!</h1>
            <Battle />

            <h2>Gary's Team</h2>
            <div className="oppbackgroundshape">
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                
            </div>
            

            <h1>VS.</h1>
            
            

            <h2>{userName}'s Team</h2>
            <div className="teambackgroundshape">\
                <PokeTeam />
                {/* <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam />
                <GenerateTeam /> */}
            </div>
            
            {/* <GeneratePokemonByName pokemonName={userPokeTeam.name} /> */}
            

            </div>
  
    )
  
  
  }
  
  
  export default PokeApp
  
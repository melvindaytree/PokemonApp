import React, { useState } from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { addPlayerName } from './teamSelectSlice'

function PlayerName() {

    const dispatch = useAppDispatch()

    const [pokePlayerName, setPokePlayerName] = useState("")

    //const userPokeTeam = useAppSelector((state) => state.teamSelect.playerName);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //alert(`Submitting Name ${playerName}`)
        console.log(pokePlayerName)
        dispatch(addPlayerName(pokePlayerName))
    }

    return(
        <div>
            <h2>Please Enter your Name</h2>
            <input type="text" name="name" onChange={(e)=> setPokePlayerName(String(e.target.value))} />
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </div>
    )
}

export default PlayerName
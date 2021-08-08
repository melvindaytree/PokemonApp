import React from 'react'
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PokeTeamState {
    names: Array<String>,
    playerName: String,
    pokemonTeam: {
      names2: Array<String>,
      isAliveStatus: boolean
    }
}

const initialState: PokeTeamState = {
    names: [],
    playerName: 'Melvin',
    //implement pokemon object here for status to enable the cross css 
    pokemonTeam: {
      names2: [],
      isAliveStatus: true
    }
}

let pointer = 0

const teamSelectSlice = createSlice({
    name: 'userPokeTeam',
    initialState,
    reducers: {
      addPokemon(state, action) {
        //if the array is empty add the first pokemon to the first part of the array
        //if there is a pokemon in there concat it onto the next
        //if there is an empty slot put the new pokemon there instead
        //if you find an empty slot put the pokemon in there

        if (state.names.length < 6) {
          console.log(state.names.length)
          state.names.push(`${action.payload}`)

        } else {

          for(let i = 0; i < 6; i++) {
              console.log(state.names[i])
              if(state.names[i] === "") {
                 state.names[i] = action.payload
                 break
                    }
                  }
                }
      },
      removePokemon(state, action) {
        if (state.names[action.payload] != "") {
          state.names[action.payload] = ""
        }
      },
      addPlayerName(state, action) {
        console.log(action.payload)
        state.playerName = `${action.payload}`
      },
    },
  })
  
  console.log(teamSelectSlice)
  
  
  export const { addPokemon, removePokemon, addPlayerName } = teamSelectSlice.actions

  export default teamSelectSlice.reducer
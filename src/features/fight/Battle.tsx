import React, { useState } from 'react'
import {rollDie} from '../../utils/utils'

function Battle() {

    let PlayerPokeArray = [1, 2, 3, 4, 5, 6]
    let OppPokeArray = [1, 2, 3, 4, 5, 6]

    function BattleArray() {
        PlayerPokeArray.forEach(num => {
            //if the player loses

            //loop through the other array and see where the puck stops
            OppPokeArray.forEach(oppNum => {

                let playerRoll: number = rollDie()
                let oppRoll: number = rollDie()

                console.log(`Start `)
                console.log(`Player Roll ${playerRoll}`)
                console.log(`Player Array ${PlayerPokeArray}`)
                console.log(`Opp Roll ${oppRoll}`)
                console.log(`Opp Array ${OppPokeArray}`)


                if (playerRoll < oppRoll) {
                    PlayerPokeArray.shift()
                    return
                } else if (playerRoll > oppRoll) {
                    OppPokeArray.shift()
                    
                } else {
                    OppPokeArray.shift()
                }

                if (!PlayerPokeArray.length) console.log("Player Lost2")
                if (!OppPokeArray.length) console.log("Opp Lost2")

                console.log('End')
                console.log(`Player Roll2 ${playerRoll}`)
            console.log(`Player Array2 ${PlayerPokeArray}`)
            console.log(`Opp Roll2 ${oppRoll}`)
            console.log(`Opp Array2 ${OppPokeArray}`)
            })



                let playerRoll: number = rollDie()
                let oppRoll: number = rollDie()

                if (playerRoll < oppRoll) {
                    PlayerPokeArray.shift()
                } else if (playerRoll > oppRoll) {
                    OppPokeArray.shift()
                    
                } else {
                    OppPokeArray.shift()
                }

            
            

            if (!PlayerPokeArray.length) console.log("Player Lost")
            if (!OppPokeArray.length) console.log("Opp Lost")
        })


    }
   
    BattleArray()
    console.log(`Final Player Array ${PlayerPokeArray}`)
    console.log(`Final Opp Array ${OppPokeArray}`)

    return(
        <div>Hi</div>
    )
}

export default Battle
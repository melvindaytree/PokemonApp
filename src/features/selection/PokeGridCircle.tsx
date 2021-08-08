import React, { useState } from 'react'
import './PokeGrid.css'




 function PokeGridCircle(props) {
    return (
            <li className="pokeheader">{props.name}</li>
    )
 }    

export default PokeGridCircle;

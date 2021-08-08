import React, { useState } from 'react'
import './PokeGrid.css'




 function PokeGridBox(props) {

    return (
        <div id="Pokemon1" className="pokegrid">
            <div className="pokegridinbox">
                <h3 className="pokegridboxtitle">{props.name}</h3>
                <p>Id: {props.id}</p>
                <img src={props.imgurl} alt={props.name}/>
                <br />
                <button id={props.name} onClick={props.buttonFunction}>Remove -</button>
            </div>
        </div>
    )
 }    

export default PokeGridBox;

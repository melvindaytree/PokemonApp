import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
        <Link to={`/`}>Home</Link>
        <br />
        <Link to={`/teams`}>Go To Teams Page</Link>
        </div>
    )
}

export default NavBar
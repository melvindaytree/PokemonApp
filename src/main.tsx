import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import {store} from './app/store'
import PokeApp from './PokeApp'
import PokePage from './features/PokePage'
import TeamsPage from './features/team/TeamsPage'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/PokePage/:pokeID" component={PokePage} />
          <Route exact path="/home" component={PokeApp} />
          <Route exact path="/" component={PokeApp} />
          <Route exact path="/teams" component={TeamsPage} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

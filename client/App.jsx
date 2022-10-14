import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Routes } from 'react-router-dom'

import './stylesheets/application.scss'

// boilerplate
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';
// import HomeContainer from './HomeContainer.jsx';
// import GraphContainer'./GraphContainer.jsx';

function App (props) {
  return (
    <Router>
      <Switch>

        {/* <Route path='/' component={HomeContainer} />
        <Route path='/profile' component={Profile}/> */}

      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom'

import TestMessage from './home/components/TestMessage.jsx'

import './stylesheets/application.scss'

// boilerplate
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';
// import HomeContainer from './HomeContainer.jsx';
// import GraphContainer'./GraphContainer.jsx';

function App (props) {
  return (
    <TestMessage> </TestMessage>
  )
}

// <Router>
//     <Route path='/' component={HomeContainer} />
//     <Route path='/profile' component={Profile}/>
// </Router>

export default App

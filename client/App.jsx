import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom'

import TestMessage from './home/components/TestMessage.jsx';
import CalenderContainer from './home/containers/CalenderContainer';

import './stylesheets/application.scss'

// boilerplate
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';
// import HomeContainer from './HomeContainer.jsx';
// import GraphContainer'./GraphContainer.jsx';

function App (props) {
  return (
    <CalenderContainer></CalenderContainer>
  )
}

// <Router>
//     <Route path='/' component={HomeContainer} />
//     <Route path='/profile' component={Profile}/>
// </Router>

export default App

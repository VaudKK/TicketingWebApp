import React from 'react';
import './css/App.css';

import { Router } from '@reach/router';

//import Church from './components/Church';
import Navigation from './components/Navigation';
import Home from './components/Home';
//import Session from './components/Session';
import SessionList from './components/SessionList';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Home path="/"/>
        <SessionList path="/sessions"/>
      </Router>
    </div>
  );
}

export default App;

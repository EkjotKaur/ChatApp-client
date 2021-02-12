// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Chat from './components/Chat';
import Join from './components/Join';

const App = () => {
  return (
    <Router>
       <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;

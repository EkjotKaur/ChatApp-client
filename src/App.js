// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Chat from './components/Chat';
import Join from './components/Join';

const App = () => {
  return (
    <div className="appOuterContainer">
    <div className="appInnerContainer">
      <h1 className="heading">The Chatting App</h1>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  </div>
   
  );
}

export default App;

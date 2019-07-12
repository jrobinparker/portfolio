import React from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import About from './components/About';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import About from './components/About';
import Sites from './components/Sites';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sites" component={Sites} />
    </div>
    </Router>
  );
}

export default App;

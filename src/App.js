import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav';
import './App.css';
import * as THREE from 'three';

const App = () => {
    return (
      <Router>
        <Switch>
          <div className="container">
              <Nav />
              <Route exact path='/' component={Home} />
              <Route exact path='/about-me' component={About} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/experience' component={Experience} />
              <Route exact path='/projects' component={Projects} />
          </div>
        </Switch>
      </Router>
  );
}

export default App;

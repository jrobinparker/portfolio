import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav';
import './App.css';
import * as THREE from 'three';

const App = () => {
    return (
          <div className="container">
              <Home />
              <About />
              <Skills />
              <Experience />
          </div>
  );
}

export default App;

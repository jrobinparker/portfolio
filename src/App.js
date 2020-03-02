import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Projects />
      </div>
    </div>
  );
}

export default App;

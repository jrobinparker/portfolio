import React from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import About from './components/About';
import Sites from './components/Sites';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <div className="welcome bg2">
          <Body />
        </div>
        <div className="about bg3" id="about">
          <About />
        </div>
        <div className="sites bg4" id="sites">
          <Sites />
        </div>
      </div>
  );
}

export default App;

import React, { Fragment, Suspense, useRef } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav';
import './App.css';
import { Canvas, Dom, useFrame } from 'react-three-fiber';
import { Box } from 'drei';
import Scene from './components/Scene';
import perlin from './components/perlin';

const App = () => {

    return (
      <Fragment>
        <Router>
          <Switch>
            <div className="container">
                <Route exact path='/' component={Home} />
                <Route exact path='/about-me' component={About} />
                <Route exact path='/skills' component={Skills} />
                <Route exact path='/experience' component={Experience} />
                <Route exact path='/projects' component={Projects} />
            </div>
          </Switch>

        </Router>
        <Canvas camera={{ zoom: 10, position: [0, 2, 40]}}>
            <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
              <Scene />
            </Suspense>
        </Canvas>
    </Fragment>
  );
}

export default App;

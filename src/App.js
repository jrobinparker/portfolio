import React, { Fragment, Suspense } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.scss';
import { Canvas, Dom } from 'react-three-fiber';
import Scene from './components/Scene';

const App = () => {

    return (
      <div className="app">
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
        <Canvas camera={{ zoom: 15, position: [-4, 0, 40]}}>
            <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
              <Scene />
            </Suspense>

        </Canvas>
    </div>
  );
}

export default App;

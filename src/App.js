import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Scene from './components/Scene';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import './App.scss';
import { Canvas } from 'react-three-fiber';

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
              <Suspense fallback={<LoadingScreen/>}>
                  <Scene />
              </Suspense>
            </Canvas>
        </div>
  );
}

export default App;

import React from 'react';
import Nav from './components/Nav';
import Sea from './components/Sea';
import Body from './components/Body';
import About from './components/About';
import Sites from './components/Sites';
import Contact from './components/Contact';
import './App.css';

class App extends React.Component {

  componentDidMount() {

  }

  render() {

  return (
    <div className="App">
      <Body />
      <Sea />
      <About />
      <Sites />
      <Contact />
      <img src={require('./assets/Vector.png')} id="seafloor"/>
    </div>
  );
}
}

export default App;

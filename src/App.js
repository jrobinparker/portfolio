import React from 'react';
import Nav from './components/Nav';
import Sea from './components/Sea';
import Welcome from './components/Welcome';
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
      <Welcome />
      <Sea />
      <div className="sea-bg">
        <About />
        <Sites />
        <Contact />
      </div>
    </div>
  );
}
}

export default App;

import React from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import About from './components/About';
import Sites from './components/Sites';
import Sea from './components/Sea';
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
    </div>
  );
}
}

export default App;

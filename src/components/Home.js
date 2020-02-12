import React from 'react';
import gsap from 'gsap';

class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div id="home">
        <div className="header">jeremy parker</div>
        <div className="items">
          <div className="item link" id="link1">about me</div>
          <div className="item link" id="link2">skills</div>
          <div className="item link" id="link3">education & experience</div>
          <div className="item link" id="link4">projects</div>
        </div>
      </div>
    )
  }
}

export default Home;

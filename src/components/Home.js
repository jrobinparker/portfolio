import React from 'react';
import gsap from 'gsap';

class Home extends React.Component {

  componentDidMount() {
    const header = document.querySelector('.home-header')

    gsap.to(header, .5, {opacity: 1, x: -5})
  }

  render() {
    return (
      <div id="home">
        <div className="home-header">jeremy parker</div>
        <div className="home-links">
          <div className="home-link" id="link1">about me</div>
          <div className="home-link" id="link2">skills</div>
          <div className="home-link" id="link3">education & experience</div>
          <div className="home-link" id="link4">projects</div>
        </div>
      </div>
    )
  }
}

export default Home;

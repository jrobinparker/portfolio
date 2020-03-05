import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

class Home extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div id="home">
        <div id="home-content">
          <div className="header">jeremy parker</div>
          <div className="items">
            <div className="item link" id="link1"><Link to={'/about'}>about me</Link></div>
            <div className="item link" id="link2"><Link to={'/skills'}>skills</Link></div>
            <div className="item link" id="link3"><Link to={'/experience'}>experience</Link></div>
            <div className="item link" id="link4"><Link to={'/projects'}>projects</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

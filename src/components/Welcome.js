import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {


  render() {

  return (
    <div>
    <div className="home-text border-gradient-day fadein-up" id="home-text">
      <div className="welcome-text">
        <div>i'm <span className="name" id="name">jeremy parker</span>,</div>
        <div className="languages">a web developer from los angeles, ca</div>
        <div className="links">
          <a onClick={() => document.querySelector('.about-me').scrollIntoView({behavior: 'smooth'})}>about me</a>
          <a onClick={() => document.querySelector('.sites-header-text').scrollIntoView({behavior: 'smooth'})}>sites</a>
          <a onClick={() => document.querySelector('.contact-header').scrollIntoView({behavior: 'smooth'})}>contact</a>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default Welcome
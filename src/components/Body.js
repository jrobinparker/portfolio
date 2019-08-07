import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {


  render() {

  return (
    <div>
    <div className="home-text border-gradient-day fadein-up" id="home-text">
      <div className="welcome-text">
        <div>i'm <span className="name-day" id="name">jeremy parker</span>,</div>
        <div className="languages">an aspiring web developer from los angeles, ca</div>
        <div className="links">
          <a onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>about me</a>
          <a onClick={() => document.getElementById('sites').scrollIntoView({behavior: 'smooth'})}>sites</a>
          <a onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>contact</a>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default Body

import React from 'react';

export default function Welcome() {

  return (
    <div className="home-text border-gradient-day fadein-up" id="home-text">
      <div className="welcome-text">
        <div className="name-row">i'm <span className="name" id="name">jeremy parker</span>,</div>
        <div className="languages">a web developer from los angeles, ca</div>
        <div className="welcome-links">
          <div className="welcome-link" onClick={() => document.querySelector('.about-content').scrollIntoView({behavior: 'smooth'})}>about me</div>
          <div className="welcome-link" onClick={() => document.querySelector('.sites-header-text').scrollIntoView({behavior: 'smooth'})}>sites</div>
          <div className="welcome-link" onClick={() => document.querySelector('.contact-header').scrollIntoView({behavior: 'smooth'})}>contact</div>
        </div>
      </div>
    </div>
  )
}

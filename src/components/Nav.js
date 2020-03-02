import React from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Nav = () => {
  const expandNav = () => {
    const tl = gsap.timeline()

    document.getElementById('nav-icon').classList.toggle('change-icon')
    document.getElementById('nav-bg').classList.toggle('display-bg')
    document.getElementById('nav-menu').classList.toggle('display-menu')
  }

  return (
    <div className="nav">
      <div className="nav-icon" id="nav-icon" onClick={expandNav}>
        <div id="line1" className="line">&nbsp;</div>
        <div id="line2" className="line">&nbsp;</div>
        <div id="line3" className="line">&nbsp;</div>
      </div>
      <div className="nav-menu" id="nav-menu">
        <div className="nav-links">
          <ul className="nav-links-list">
            <li><Link to={'/'} onClick={expandNav}>home</Link></li>
            <li><Link to={'/about'} onClick={expandNav}>about me</Link></li>
            <li><Link to={'/skills'} onClick={expandNav}>skills</Link></li>
            <li><Link to={'/experience'} onClick={expandNav}>experience</Link></li>
            <li><Link to={'/projects'} onClick={expandNav}>projects</Link></li>
          </ul>
        </div>
      </div>
      <div className="nav-bg" id="nav-bg">
      </div>
    </div>
  )
}

export default Nav

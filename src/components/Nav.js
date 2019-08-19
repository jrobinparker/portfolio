import React from 'react';

class Nav extends React.Component {

  expandNav() {
    document.getElementById('nav-icon').classList.toggle('change-icon')
    document.getElementById('nav-bg').classList.toggle('display-bg')
    document.getElementById('nav-menu').classList.toggle('display-menu')
  }

  render() {

  return (
    <div className="nav">
      <div className="nav-icon" id="nav-icon" onClick={this.expandNav}>
        <div id="line1" className="line">&nbsp;</div>
        <div id="line2" className="line">&nbsp;</div>
        <div id="line3" className="line">&nbsp;</div>
      </div>
      <div className="nav-menu" id="nav-menu">
        <div className="nav-links">
          <ul className="nav-links-list">
            <li onClick={() => {
              document.getElementById('top').scrollIntoView({behavior: 'smooth'})
              this.expandNav()
            }}>home</li>
            <li onClick={() => {
              document.querySelector('.about-content').scrollIntoView({behavior: 'smooth'})
              this.expandNav()
            }}>about me</li>
            <li onClick={() => {
              document.querySelector('.sites-header-text').scrollIntoView({behavior: 'smooth'})
              this.expandNav()
            }}>sites</li>
            <li onClick={() => {
              document.querySelector('.contact-header').scrollIntoView({behavior: 'smooth'})
              this.expandNav()
            }}>contact</li>
          </ul>
        </div>
      </div>
      <div className="nav-bg" id="nav-bg">
      </div>
    </div>
  )
}
}

export default Nav

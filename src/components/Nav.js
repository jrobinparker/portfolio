import React from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    expand: false
  }

  expandNav() {
    const menu = document.querySelector('.nav-menu')
    const icon = document.getElementById('nav-icon')
    if (!this.state.expand) {
      gsap.set(menu, {zIndex: 200})
      gsap.set(icon, {zIndex: 300})
      document.getElementById('nav-icon').classList.toggle('change-icon')
      gsap.to(menu, .25, {y: 20})
    } else {
      document.getElementById('nav-icon').classList.toggle('change-icon')
      gsap.to(menu, .25, {y: -1000})
    }
  }

  render() {

    return (
      <div className="nav">
        <div className="nav-icon" id="nav-icon" onClick={() => {
          this.setState({
            expand: !this.state.expand
          })
          this.expandNav()
        }}>
          <div id="line1" className="line">&nbsp;</div>
          <div id="line2" className="line">&nbsp;</div>
          <div id="line3" className="line">&nbsp;</div>
        </div>
        <div className="nav-menu" id="nav-menu">
          <div className="nav-links">
              <div className="header"><Link to={'/'} onClick={() => {
                this.setState({
                  expand: !this.state.expand
                })
                this.expandNav()
              }}>home</Link></div>
              <div className="header"><Link to={'/about'} onClick={() => {
                this.setState({
                  expand: !this.state.expand
                })
                this.expandNav()
              }}>about me</Link></div>
              <div className="header" style={{ letterSpacing: '-7px'}}><Link to={'/skills'} onClick={() => {
                this.setState({
                  expand: !this.state.expand
                })
                this.expandNav()
              }}>skills</Link></div>
              <div className="header"><Link to={'/experience'} onClick={() => {
                this.setState({
                  expand: !this.state.expand
                })
                this.expandNav()
              }}>experience</Link></div>
              <div className="header"><Link to={'/projects'} onClick={() => {
                this.setState({
                  expand: !this.state.expand
                })
                this.expandNav()
              }}>projects</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav

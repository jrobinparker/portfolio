import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Power1 } from 'gsap';

class Home extends React.Component {

  componentDidMount() {
    const header = document.getElementById('home-header')
    const links = document.querySelectorAll('.link')
    const linkText = document.querySelectorAll('.link-text')
    const tl = gsap.timeline()

    gsap.set(header, {opacity: 0, y: 50})
    gsap.to(header, {duration: .5, opacity: 1, y: 0})

    links.forEach(link => {
      gsap.set(link, {height: '5vh', width: '0vw'})
      gsap.to(link, {delay: .5, duration: .5, ease: Power1.easeIn, width: '20vw', opacity: 1})
    })

    linkText.forEach(text => {
      gsap.set(text, {opacity: 0})
      gsap.to(text, {delay: 1, duration: .5, opacity: 1})
    })
  }

  render() {
    return (
      <div id="home">
        <div id="home-content">
          <div className="header" id="home-header">jeremy parker</div>
          <div className="items">
            <Link to={'/about'}><div className="item link"><span className="link-text">about me</span></div></Link>
            <Link to={'/skills'}><div className="item link"><span className="link-text">skills</span></div></Link>
            <Link to={'/experience'}><div className="item link"><span className="link-text">experience</span></div></Link>
            <Link to={'/projects'}><div className="item link"><span className="link-text">projects</span></div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

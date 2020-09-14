import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Power1 } from 'gsap';

const Home = () => {

  useEffect(() => {
      const home = document.getElementById('home-content')
      const header = document.getElementById('home-header')
      const links = document.querySelectorAll('.link')
      const linkText = document.querySelectorAll('.link-text')
      const tl = gsap.timeline()

      gsap.set(header, {opacity: 0, y: 50})
      gsap.to(home, {opacity: 1})
      gsap.to(header, {duration: .5, opacity: 1, y: 0})

      links.forEach(link => {
        gsap.set(link, {height: '5vh', width: '0vw'})
        gsap.to(link, {delay: .5, duration: .5, ease: Power1.easeIn, width: '20vw', opacity: 1})
      })

      linkText.forEach(text => {
        gsap.set(text, {opacity: 0})
        gsap.to(text, {delay: 1, duration: .5, opacity: 1})
      })
  }, [])

    return (
      <div id="home">
        <div id="home-content">
          <div className="header" id="home-header">Jeremy Parker</div>
          <div className="items">
            <div className="item link">
              <Link to='/about-me'><span className="link-text">about me</span></Link>
            </div>
            <div className="item link">
              <Link to='skills'><span className="link-text">skills</span></Link>
            </div>
            <div className="item link">
              <Link to='/experience'><span className="link-text">experience</span></Link>
            </div>
            <div className="item link">
              <Link to='/projects'><span className="link-text">projects</span></Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;

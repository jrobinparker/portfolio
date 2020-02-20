import React from 'react';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin)

class About extends React.Component {

  componentDidMount() {
    const header = document.querySelector('.header')
    const abtImg = document.querySelector('.about-img')
    const abtTextCt = document.querySelector('.about-text-container')
    const abtText = document.querySelector('.about-text')
    const rule = CSSRulePlugin.getRule(".about-text-container:after")
    const tl = gsap.timeline()

    gsap.set(abtImg, {visibility: 'hidden', opacity: 0})
    gsap.set(abtTextCt, {height: '0vh', width: '0vh'})
    gsap.set(rule, {cssRule: {opacity: 0}})

    tl.to(abtTextCt, {duration: .5, ease: Power1.easeIn, height: '38vh', width: '60vw' })
      .to(rule, .1, {cssRule: {opacity: 1}})
      .to(abtText, .1, { opacity: 1 })
      .to(abtImg, .25, { visibility: 'visible', opacity: 1 })

  }

  render() {
    return (
      <div id="about">
          <div className="header">about me</div>
          <div className="about-content">
            <div className="about-text-container">
              <div className="about-text">
                <div>I've improved employee data reporting using data science tools in Python, built a full-stack data visualization app for firm's Orientation event data with Flask and React, created responsive HTML5 pages for the firm's learning management system, and developed custom JavaScript solutions for the Articulate Storyline training software.</div>
                <div>I've also expanded my company's online learning offerings with the latest in L&D tech and co-led the effort to modernize the firm's online curriculum with a new LMS.</div>
                <div>I have a number of personal projects, including a community-driven Japanese language learning app built on the MERN stack, available in my GitHub repository.</div>
                <div>Aside from the world of L&D, data science, and web development, I'm also a Japanese speaker and a big fan of all things 80's, art, nature, sushi, and crab cakes.</div>
              </div>
            </div>
            <div className="about-img">
              <img src={require('../assets/photo.jpeg')} />
              <div className="about-links">
                <i className="fab fa-github-square" onClick={() => window.open('https://github.com/jrobinparker/', '_blank')}/>
                <i className="fab fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/jrobinparker/', '_blank')}/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About

import React, { useState, useEffect, useRef } from 'react';
import AboutInfo from './AboutInfo';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import VisibilitySensor from 'react-visibility-sensor';
import { Redirect, withRouter } from 'react-router-dom';
gsap.registerPlugin(CSSRulePlugin);

const About = ({ history }) => {
  const [ aboutInfo ] = useState(['Name: Jeremy Parker', 'Location: Los Angeles'])

  useEffect(() => {
      const header = document.getElementById('about-header')
      const abtImg = document.querySelector('.about-img')
      const abtTextCt = document.querySelector('.about-box')
      const abtText = document.querySelector('.about-text')
      const bar = document.querySelector('.about-bar-title')
      const tl = gsap.timeline()

      gsap.set(header, { opacity: 0, y: 50 })
      gsap.set(abtImg, { opacity: 0})
      gsap.set(abtTextCt, {height: '0vh', width: '0vh', opacity: 0 })
      gsap.set(bar, { opacity: 0 })

      tl.to(header, .5, {opacity: 1, y: 0})
        .to(abtTextCt, {delay: .1, duration: .5, opacity: 1, ease: Power1.easeIn, height: '60vh', width: '80vw' })
        .to(bar, {opacity: 1 })
        .to(abtText, .1, { opacity: 1 })
        .to(abtImg, .25, { visibility: 'visible', opacity: 1 })
    }, [])

    const closeAnimation = async () => {
      const header = document.getElementById('about-header')
      const abtImg = document.querySelector('.about-img')
      const abtTextCt = document.querySelector('.about-box')
      const abtText = document.querySelector('.about-content')
      const rule = CSSRulePlugin.getRule(".about-text-container:after")
      const tl = gsap.timeline()


      await tl
        .to(abtText, .2, { opacity: 0 })
        .to(abtTextCt, {delay: .25, duration: .5, ease: Power1.easeIn, opacity: 0, height: '0vh', width: '0vw' })
    }

    const close = async () => {
      await closeAnimation()
      history.push('/')
    }

    return (
      <div id="about">
          <div className="header-container">
            <div className="header" id="about-header">About Me</div>
          </div>
          <div className="about-box">
            <div className="about-bar">
              <span className="about-bar-title">About Me</span>
              <i class="fas fa-times" onClick={() => close()}/>
            </div>
              <div className="about-content">
                <div className="about-img">
                  <img src={require('../assets/photo.jpeg')}/>
                  <div className="about-info">
                    {aboutInfo.map((abt, i) => <AboutInfo text={abt} number={i} />)}
                  </div>
                  <div className="about-icons">
                    <i class="fab fa-github-square"  style={{ color: 'white' }} />
                    <i class="fab fa-linkedin"  style={{ color: 'white' }} />
                  </div>
                </div>
                <div className="about-text">
                  <span>I've improved employee data reporting using data science tools in Python, built a full-stack data visualization app for firm's Orientation event data with Flask and React, created responsive HTML5 pages for the firm's learning management system, and developed custom JavaScript solutions for the Articulate Storyline training software.</span>
                  <span>I've also expanded my company's online learning offerings with the latest in L&D tech and co-led the effort to modernize the firm's online curriculum with a new LMS.</span>
                  <span>I have a number of personal projects, including a community-driven Japanese language learning app built on the MERN stack, available in my GitHub repository.</span>
                  <span>Aside from the world of L&D, data science, and web development, I'm also a Japanese speaker and a big fan of all things 80's, art, nature, sushi, and crab cakes.</span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default withRouter(About);

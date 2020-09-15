import React, { useState, useEffect, useRef } from 'react';
import AboutInfo from './AboutInfo';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import VisibilitySensor from 'react-visibility-sensor';
gsap.registerPlugin(CSSRulePlugin);

const About = () => {
  const [ aboutInfo ] = useState(['Name: Jeremy Parker', 'Location: Los Angeles', 'github/', 'linkedin'])

  useEffect(() => {
      const header = document.getElementById('about-header')
      const abtImg = document.querySelector('.about-img')
      const abtTextCt = document.querySelector('.about-box')
      const abtText = document.querySelector('.about-text')
      const rule = CSSRulePlugin.getRule(".about-text-container:after")
      const tl = gsap.timeline()

      gsap.set(header, {opacity: 0, y: 50})
      gsap.set(abtImg, {visibility: 'hidden', opacity: 0})
      gsap.set(abtTextCt, {height: '0vh', width: '0vh', visibility: 'hidden'})
      gsap.set(rule, {cssRule: {opacity: 0}})

      tl.to(header, .5, {opacity: 1, y: 0})
        .to(abtTextCt, {delay: .1, duration: .5, ease: Power1.easeIn, visibility: 'visible', height: '60vh', width: '80vw' })
        .to(rule, .1, {cssRule: {opacity: 1}})
        .to(abtText, .1, { opacity: 1 })
        .to(abtImg, .25, { visibility: 'visible', opacity: 1 })
    }, [])

    return (
      <div id="about">
          <div className="header" id="about-header">About Me</div>
          <div className="about-box">
            <div className="about-bar">
              <i class="fas fa-times" />
            </div>
              <div className="about-content">
              <div className="about-img">
                <div className="overlay"></div>
                <img src={require('../assets/photo.jpeg')} />
                <div className="about-info">
                  {aboutInfo.map((abt, i) => <AboutInfo text={abt} number={i} />)}
                </div>
              </div>
                <div className="about-text">
                  <div>I've improved employee data reporting using data science tools in Python, built a full-stack data visualization app for firm's Orientation event data with Flask and React, created responsive HTML5 pages for the firm's learning management system, and developed custom JavaScript solutions for the Articulate Storyline training software.</div>
                  <div>I've also expanded my company's online learning offerings with the latest in L&D tech and co-led the effort to modernize the firm's online curriculum with a new LMS.</div>
                  <div>I have a number of personal projects, including a community-driven Japanese language learning app built on the MERN stack, available in my GitHub repository.</div>
                  <div>Aside from the world of L&D, data science, and web development, I'm also a Japanese speaker and a big fan of all things 80's, art, nature, sushi, and crab cakes.</div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About

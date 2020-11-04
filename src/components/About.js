import React, { useState, useEffect } from 'react';
import AboutInfo from './AboutInfo';
import Header from './Header';
import gsap from 'gsap';
import { Power1 } from 'gsap';

const About = ({ history }) => {
  const [ aboutInfo ] = useState([
    {
      type: 'text',
      text: 'Name: Jeremy Parker'
    },
    {
      type: 'text',
      text: 'Location: Los Angeles'
    },
    {
      type: 'link',
      text: 'View Github',
      url: 'https://github.com/jrobinparker'
    },
    {
      type: 'link',
      text: 'View LinkedIn',
      url: 'https://www.linkedin.com/in/jrobinparker/'
    }
  ])

  useEffect(() => {
      const header = document.getElementById('about-header')
      const abtImg = document.querySelector('.about-img')
      const abtTextCt = document.querySelector('.about-box')
      const abtText = document.querySelector('.about-text')
      const bar = document.querySelector('.about-bar-title')
      const tl = gsap.timeline()

      gsap.set(header, { y: 50 })

      tl.to(header, .5, { opacity: 1, y: 0 })
        .to(abtTextCt, .5, { opacity: 1, ease: Power1.easeIn, height: '60vh', width: '80vw' })
        .to(bar, { opacity: 1 })
        .to(abtText, .25, { opacity: 1 })
        .to(abtImg, .25, { opacity: 1 })
    }, [])

    const closeAnimation = async () => {
      const header = document.getElementById('about-header')
      const abtTextCt = document.querySelector('.about-box')
      const abtText = document.querySelector('.about-content')
      const tl = gsap.timeline()


      await tl
        .to(abtText, .2, { opacity: 0 })
        .to(abtTextCt, {delay: .25, duration: .5, ease: Power1.easeIn, opacity: 0, height: '0vh', width: '0vw' })
        .to(header, .5, {opacity: 0, y: 50})
    }

    const close = async () => {
      await closeAnimation()
      history.push('/')
    }

    return (
      <div id="about">
          <Header headerId={'about-header'} headerText={'About Me'} />
          <div className="about-box">
            <div className="about-bar">
              <span className="about-bar-title">About Me</span>
              <i class="fas fa-times" onClick={() => close()}/>
            </div>
              <div className="about-content">
                <div className="about-img">
                  <img src={require('../assets/photo.jpeg')} alt="headshot"/>
                  <div className="about-info">
                    {aboutInfo.map((abt, i) => <AboutInfo itemType={abt.type} itemText={abt.text} itemLink={abt.url} number={i} />)}
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

export default About;

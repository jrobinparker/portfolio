import React, { useState, useEffect } from 'react';
import AboutInfo from './AboutInfo';
import Header from '../../components/Header';
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
    },
    {
      type: 'link',
      text: 'Email Me',
      url: 'mailto:jrobinparker@gmail.com'
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
                  <img src={require('../../assets/portrait.JPG')} alt="headshot"/>
                  <div className="about-info">
                    {aboutInfo.map((abt, i) => <AboutInfo itemType={abt.type} itemText={abt.text} itemLink={abt.url} number={i} />)}
                  </div>
                </div>
                <div className="about-text">
                  <span>Hey there. I'm Jeremy Parker, a self-taught web developer focusing on JavaScript and Python.</span>
                  <span>Hoping to expand functionality in Captivate, Adobe's training course software, I started my programming journey in 2017 by learning about basic web development in HTML and CSS. That first step introduced me to Ruby on Rails, my gateway into the world of web development and programming.</span>
                  <span>After learning Ruby casually, I decided to pursue programming seriously after discovering React in 2018 and Python the following year. Since then, I've built a full-stack MERN app for a martial arts school in New Jersey and improved workplace processes with data science solutions in Python.</span>
                  <span>In my day-to-day career, I manage my company's LMS and work with trainers to build technical training courses. I'm also a Japanese speaker and have translated financial and medical documents.</span>
                  <span>Outside of working, coding, and taking care of my daughter Nina, I love running, cooking, watching Japanese TV, playing retro video games, and listening to 80's music.</span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About;

import React, { useEffect, useState } from 'react';
import OtherExp from './OtherExp';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import AboutInfo from './AboutInfo';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Experience = () => {
  const [ agInfo ] = useState(['Analysis Group', 'Senior L&D Tech Specialist', '10/2011 - present'])
  const [ experience ] = useState([
      {
        company: 'Noyes Museum of Art',
        location: 'Oceanville, NJ',
        title: 'Research and Tech Intern',
        length: '5/2007 - 8/2007'
      },
      {
        company: 'Numazu/Yokohama BOE',
        location: 'Numazu/Yokohama, Japan',
        title: 'ESL Instructor',
        length: '4/2008 - 1/2010'
      },
      {
        company: 'Smith Patent Office',
        location: 'Washington, DC',
        title: 'Japanese Patent Consultant',
        length: '3/2011 - 3/2013'
      }
  ])

  useEffect(() => {

    const header = document.getElementById('about-header')
    const abtImg = document.querySelector('.about-img')
    const abtTextCt = document.querySelector('.about-box')
    const abtText = document.querySelector('.about-text')
    const rule = CSSRulePlugin.getRule(".about-text-container:after")
    const expTextCt = document.querySelector('.exp-text-container')
    const expText = document.querySelector('.exp-text')
    const expItems = document.querySelectorAll('.exp-item')
    const expItemText = document.querySelectorAll('.exp-item-text')
    const otherCont = document.querySelector('.other-box')
    const otherExp = document.querySelectorAll('.other-exp-item')
    const otherText = document.querySelectorAll('.other-exp-container')

    const tl = gsap.timeline()

    gsap.set(header, {opacity: 0, y: 50})
    gsap.set(abtImg, {visibility: 'hidden', opacity: 0})
    gsap.set(abtTextCt, {height: '0vh', width: '0vh', visibility: 'hidden'})
    gsap.set(rule, {cssRule: {opacity: 0}})
    gsap.set(expTextCt, {height: '0vh', width: '0vh', visibility: 'hidden'})
    gsap.set(expText, { opacity: 0 })
    gsap.set(expItems, {height: '5vh', width: '0vw'})
    gsap.set(expItemText, {opacity: 0})
    gsap.set(otherCont, {height: '0vh', width: '0vh', visibility: 'hidden'})
    gsap.set(otherText, {opacity: 0})

    tl.to(header, .5, {opacity: 1, y: 0})
      .to(abtTextCt, {delay: .1, duration: .5, ease: Power1.easeIn, visibility: 'visible', height: '50vh', width: '80vw' })
      .to(rule, .1, {cssRule: {opacity: 1}})
      .to(abtText, .1, { opacity: 1 })
      .to(abtImg, .25, { visibility: 'visible', opacity: 1 })
      .to(otherCont, {delay: .1, duration: .5, ease: Power1.easeIn, visibility: 'visible', height: '50vh', width: '80vw' })
      .to(otherText, .1, { opacity: 1 })



      expItems.forEach(item => {
        gsap.to(item, {delay: .5, duration: .5, ease: Power1.easeIn, width: '30vw', opacity: 1})
      })

      expItemText.forEach(text => {
        gsap.to(text, {delay: 1, duration: .5, opacity: 1})
      })

      tl.to(expTextCt, {delay: 1, duration: .5, ease: Power1.easeIn, height: '43vh', width: 'auto', visibility: 'visible' })
        .to(expText, .1, { opacity: 1 })

      otherExp.forEach(item => {
        gsap.to(item, {delay: 2, duration: .5, ease: Power1.easeIn, width: '24.15vw', opacity: 1})
      })

      otherText.forEach(text => {
        gsap.to(text, {delay: 2.5, duration: .5, opacity: 1})
      })
    }, [])

    return (
      <div id="exp">
      <div id="exp-content">
        <div className="header">experience</div>

        <div className="about-box" style={{ marginBottom: '10px' }}>
          <div className="about-bar">
            <i class="fas fa-times" />
          </div>
            <div className="about-content">
            <div className="about-img" style={{ width: '25%', marginRight: '10px' }}>
              <div className="about-info">
                {agInfo.map((abt, i) => <AboutInfo text={abt} number={i} />)}
              </div>
            </div>
              <div className="about-text" style={{ width: '75%', fontSize: '1rem', alignSelf: 'flex-start' }}>
              <p>Developed a solution to deliver higher quality employee metrics for case staffing and marketing initiatives by analyzing employee resumes using natural language processing and Pandas.</p>
              <p>Built a desktop GUI app using tkinter, Selenium, and pandas to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives.</p>
              <p>Created a data visualization dashboard to analyze deeply-nested JSON data from the firm's events app with Pandas, Bokeh, Flask, React, and Bulma.</p>
              <p>Create responsive HTML5 pages for LMS.</p>
              <p>Develop custom JavaScript solutions for the Articulate Storyline course builder software.</p>
              <p>Build detailed SharePoint workflows to manage compliance tasks, from task allocation for medical writing teams to a compliance management system for new hire onboarding, saving over $15,000 in yearly vendor fees.</p>
            </div>
          </div>
          </div>

          <div className="about-box other-box">
            <div className="about-bar other-bar" style={{ display: 'flex', alignItems: 'flex-start', fontFamily: 'VCR' }}>
              Other Experience
              <i class="fas fa-times" style={{ marginLeft: 'auto' }}/>
            </div>
              <div className="about-content">
                <div className="about-text" style={{ fontSize: '1rem' }}>
                <div className="other-exp-container">
                  {experience.map(exp => {
                    return <OtherExp expData={exp} />
                  })}
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    )
}

export default Experience

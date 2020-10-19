import React, { useEffect, useState } from 'react';
import Header from './Header';
import OtherExp from './OtherExp';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import AboutInfo from './AboutInfo';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Experience = ({ history }) => {
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
    const bar = document.querySelectorAll('.about-bar-title')[0]
    const close = document.querySelectorAll('.fas')[0]
    const otherBar = document.querySelectorAll('.about-bar-title')[1]
    const otherBarClose = document.querySelectorAll('.fas')[1]
    const abtImg = document.querySelector('.about-img')
    const abtTextCt = document.querySelector('.about-box')
    const abtText = document.querySelector('.about-text')
    const otherCont = document.querySelector('.other-box')
    const otherText = document.querySelectorAll('.other-box .about-text')

    const tl = gsap.timeline()

    gsap.set(header, {opacity: 0, y: 50})
    gsap.set(abtImg, {opacity: 0})
    gsap.set(bar, {opacity: 0})
    gsap.set(otherBar, {opacity: 0})
    gsap.set(close, {opacity: 0})
    gsap.set(otherBarClose, {opacity: 0})
    gsap.set(abtTextCt, {height: '0vh', width: '0vh'})
    gsap.set(otherCont, {opacity: 0, height: '0vh', width: '0vh'})
    gsap.set(otherText, {opacity: 0})

    tl.to(header, .5, {opacity: 1, y: 0})
      .to(abtTextCt, .25, {delay: .1, ease: Power1.easeIn, opacity: 1, height: '50vh', width: '80vw' })
      .to(bar, .25, {opacity: 1})
      .to(close, .1, {opacity: 1})
      .to(abtText, .25, { opacity: 1 })
      .to(abtImg, .25, { opacity: 1 })
      .to(otherCont, .25, {ease: Power1.easeIn, opacity: 1, height: '50vh', width: '80vw' })
      .to(otherBar, .25, {opacity: 1})
      .to(otherBarClose, .1, {opacity: 1})
      .to(otherText, .25, { opacity: 1 })

    }, [])

  const closeAnimation = async () => {
    const header = document.getElementById('about-header')
    const abtImg = document.querySelector('.about-img')
    const abtTextCt = document.querySelector('.about-box')
    const abtText = document.querySelector('.about-text')
    const otherCont = document.querySelector('.other-box')
    const otherText = document.querySelectorAll('.other-box .about-text')

    const tl = gsap.timeline()

    await tl
      .to(otherText, .25, { opacity: 0 })
      .to(otherCont, .25, { ease: Power1.easeIn, opacity: 0, height: '0vh', width: '0vw' })
      .to(abtText, .25, { opacity: 0 })
      .to(abtImg, .25, { opacity: 0 })
      .to(abtTextCt, .25, { ease: Power1.easeIn, opacity: 0, height: '0vh', width: '0vw' })
      .to(header, .25, {opacity: 0, y: 50})
  }

  const close = async () => {
    await closeAnimation()
    history.push('/')
  }

    return (
      <div id="exp">
      <Header headerId={'about-header'} headerText={'Experience'} />
      <div id="exp-content">

        <div className="about-box">
          <div className="about-bar">
            <span className="about-bar-title">Experience</span>
            <i class="fas fa-times" style={{ marginLeft: 'auto' }} onClick={() => close()}/>
          </div>
            <div className="about-content">
            <div className="about-img" style={{ width: '25%', marginRight: '10px' }}>
              <div className="about-info">
                {agInfo.map((abt, i) => <AboutInfo itemType={'text'} itemText={abt} number={i} />)}
              </div>
            </div>
              <div className="about-text">
              <span>Developed a solution to deliver higher quality employee metrics for case staffing and marketing initiatives by analyzing employee resumes using natural language processing and Pandas.</span>
              <span>Built a desktop GUI app using tkinter, Selenium, and pandas to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives.</span>
              <span>Created a data visualization dashboard to analyze deeply-nested JSON data from the firm's events app with Pandas, Bokeh, Flask, React, and Bulma.</span>
              <span>Create responsive HTML5 pages for LMS.</span>
              <span>Develop custom JavaScript solutions for the Articulate Storyline course builder software.</span>
              <span>Build detailed SharePoint workflows to manage compliance tasks, from task allocation for medical writing teams to a compliance management system for new hire onboarding, saving over $15,000 in yearly vendor fees.</span>
            </div>
          </div>
          </div>

          <div className="about-box other-box">
            <div className="about-bar other-bar">
              <span className="about-bar-title">Other Experience</span>
              <i class="fas fa-times" style={{ marginLeft: 'auto' }} onClick={() => close()}/>
            </div>
              <div className="about-content">
                <div className="about-text">
                  {experience.map(exp => {
                    return (
                      <div className="other-exp-text">
                        {exp.company} <br />
                        {exp.location} <br />
                        {exp.title} <br />
                        {exp.length} <br />
                      </div>
                    )
                  })}
              </div>
            </div>
            </div>
          </div>
      </div>
    )
}

export default Experience

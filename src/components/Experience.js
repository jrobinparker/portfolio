import React, { useEffect, useState } from 'react';
import OtherExp from './OtherExp';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';

const Experience = () => {

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
      const expTextCt = document.querySelector('.exp-text-container')
      const expText = document.querySelector('.exp-text')
      const expItems = document.querySelectorAll('.exp-item')
      const expItemText = document.querySelectorAll('.exp-item-text')
      const otherHeader = document.querySelector('.other-header')
      const otherExp = document.querySelectorAll('.other-exp-item')
      const otherText = document.querySelectorAll('.other-exp-text')

      const tl = gsap.timeline()

      gsap.set(expTextCt, {height: '0vh', width: '0vh', visibility: 'hidden'})
      gsap.set(expText, { opacity: 0 })
      gsap.set(expItems, {height: '5vh', width: '0vw'})
      gsap.set(expItemText, {opacity: 0})
      gsap.set(otherHeader, {opacity: 0, y: 5})
      gsap.set(otherExp, {height: '5vh', width: '0vw'})
      gsap.set(otherText, {opacity: 0})

      expItems.forEach(item => {
        gsap.to(item, {delay: .5, duration: .5, ease: Power1.easeIn, width: '30vw', opacity: 1})
      })

      expItemText.forEach(text => {
        gsap.to(text, {delay: 1, duration: .5, opacity: 1})
      })

      tl.to(expTextCt, {delay: 1, duration: .5, ease: Power1.easeIn, height: '43vh', width: 'auto', visibility: 'visible' })
        .to(expText, .1, { opacity: 1 })

      gsap.to(otherHeader, {delay: 2, duration: .5, opacity: 1, y: 0})

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
          <div className="exp-container">
              <div className="items">
                <div className="exp-item">
                  <span className="exp-item-text">Analysis Group</span>
                </div>
                <div className="exp-item">
                  <span className="exp-item-text">Senior Learning Tech Specialist</span>
                </div>
                <div className="exp-item">
                  <span className="exp-item-text">10/2011 - present</span>
                </div>
              </div>
              <div className="exp-area">
                <div className="exp-text-container">
                  <div className="exp-text">
                    <p>Developed a solution to deliver higher quality employee metrics for case staffing and marketing initiatives by analyzing employee resumes using natural language processing and Pandas.</p>
                    <p>Built a desktop GUI app using tkinter, Selenium, and pandas to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives.</p>
                    <p>Created a data visualization dashboard to analyze deeply-nested JSON data from the firm's events app with Pandas, Bokeh, Flask, React, and Bulma.</p>
                    <p>Create responsive HTML5 pages for LMS.</p>
                    <p>Develop custom JavaScript solutions for the Articulate Storyline course builder software.</p>
                    <p>Build detailed SharePoint workflows to manage compliance tasks, from task allocation for medical writing teams to a compliance management system for new hire onboarding, saving over $15,000 in yearly vendor fees.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="other-exp">
              <div className="header subheader other-header">other experience</div>
              <div className="other-exp-container">
                {experience.map(exp => {
                  return <OtherExp expData={exp} />
                })}
              </div>
            </div>
          </div>
      </div>
    )
}

export default Experience

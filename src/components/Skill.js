import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Power1 } from 'gsap';

const Skill = ({ skills, skillName }) => {

  useEffect(() => {
      const skill = document.querySelectorAll('.skill')
      const skillItems = document.querySelectorAll('.item')
      const skillText = document.querySelectorAll('.skill-text')

      gsap.set(skill, {opacity: 0, y: 50})
      gsap.to(skill, {duration: .5, opacity: 1, y: 0})

      skillItems.forEach(item => {
        gsap.set(item, {height: '5vh', width: '0vw'})
        gsap.to(item, {delay: .5, duration: .5, ease: Power1.easeIn, width: '20vw', opacity: 1})
      })

      skillText.forEach(text => {
        gsap.set(text, {opacity: 0})
        gsap.to(text, {delay: 1, duration: .5, opacity: 1})
      })
  }, [])

    return (
      <div className="skill">
        <div className="header subheader">{skillName}</div>
          <div className="items">
            {skills.map(skill => {
              return (
                  <div className="item">
                    <span className="skill-text" style={{ fontSize: '1rem'}}>{skill}</span>
                  </div>
              )
            })}
          </div>
      </div>
    )
}

export default Skill

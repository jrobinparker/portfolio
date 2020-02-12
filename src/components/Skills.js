import React from 'react';
import gsap from 'gsap';
import { Power1 } from 'gsap';

class Skills extends React.Component {
  state = {
    languages: [ 'javascript', 'python', 'ruby', 'sql' ],
    frontEnd: [ 'html | css', 'react | redux', 'gsap', 'css frameworks' ],
    backEnd: [ 'node.js | express', 'django | flask', 'rails | sinatra', 'mongoose' ],
    dataScience: [ 'pandas', 'bokeh', 'nltk', 'web scraping' ]
  }

  componentDidMount() {
    const skills = document.querySelectorAll('.item')
    const skillText = document.querySelectorAll('.skill-text')

    skills.forEach(skill => {
      gsap.set(skill, {height: '5vh', width: '0vw'})
      gsap.to(skill, {duration: .5, ease: Power1.easeIn, width: '20vw', opacity: 1})
    })

    skillText.forEach(text => {
      gsap.set(text, {opacity: 0})
      gsap.to(text, {delay: .5, opacity: 1})
    })
  }

  render() {
    let languages, frontEnd, backEnd, dataScience

    languages =
      <div className="items">
        {this.state.languages.map(item => {
          return (
              <div className="item">
                <span className="skill-text">{item}</span>
              </div>
          )
        })}
      </div>

    frontEnd =
      <div className="items">
        {this.state.frontEnd.map(item => {
          return (
            <div className="item">
              <span className="skill-text">{item}</span>
            </div>
          )
        })}
      </div>

    backEnd =
      <div className="items">
        {this.state.backEnd.map(item => {
          return (
            <div className="item">
              <span className="skill-text">{item}</span>
            </div>
          )
        })}
      </div>

    dataScience =
      <div className="items">
        {this.state.dataScience.map(item => {
          return (
            <div className="item">
              <span className="skill-text">{item}</span>
            </div>
          )
        })}
      </div>

    return (
      <div id="skills">
        <div className="skills-header">skills</div>
        <div className="skills-container">
            <div className="skill">
              <div className="header subheader">languages</div>
                {languages}
            </div>
            <div className="skill">
              <div className="header subheader">front end</div>
                {frontEnd}
            </div>
        </div>
        <div className="skills-container">
            <div className="skill">
              <div className="header subheader">back end</div>
                  {backEnd}
            </div>
            <div className="skill">
              <div className="header subheader">data science</div>
                {dataScience}
            </div>
        </div>
      </div>
    )
  }
}

export default Skills

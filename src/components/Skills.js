import React from 'react';
import gsap from 'gsap';

class Skills extends React.Component {
  state = {
    languages: [ 'javascript', 'python', 'ruby', 'sql' ],
    frontEnd: [ 'html | css', 'react | redux', 'gsap', 'css frameworks' ],
    backEnd: [ 'node.js | express', 'django | flask', 'rails | sinatra', 'mongoose' ],
    dataScience: [ 'pandas', 'bokeh', 'nltk', 'web scraping' ]
  }

  render() {
    let languages, frontEnd, backEnd, dataScience

    languages =
      <div className="items">
        {this.state.languages.map(item => {
          return (
                <div className="item">{item}</div>
          )
        })}
      </div>

    frontEnd =
      <div className="items">
        {this.state.frontEnd.map(item => {
          return (
            <div className="item">{item}</div>
          )
        })}
      </div>

    backEnd =
      <div className="items">
        {this.state.backEnd.map(item => {
          return (
            <div className="item">{item}</div>
          )
        })}
      </div>

    dataScience =
      <div className="items">
        {this.state.dataScience.map(item => {
          return (
            <div className="item">{item}</div>
          )
        })}
      </div>

      const skills = document.querySelectorAll('.item')

      skills.forEach(skill => {
        skill.classList.add = 'skill-item'
      })

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

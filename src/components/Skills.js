import React from 'react';
import Skill from './Skill';

class Skills extends React.Component {
  state = {
    languages: [ 'javascript', 'python', 'ruby', 'sql' ],
    frontEnd: [ 'html | css', 'react | redux', 'gsap', 'css frameworks' ],
    backEnd: [ 'node.js | express', 'django | flask', 'rails | sinatra', 'mongoose' ],
    dataScience: [ 'pandas', 'bokeh', 'nltk', 'web scraping' ]
  }

  render() {

    return (
      <div id="skills">
        <div className="skills-header">skills</div>
        <div className="skills-container">
          <Skill skillName={'languages'} skills={this.state.languages} />
          <Skill skillName={'front end'} skills={this.state.frontEnd} />
        </div>
        <div className="skills-container">
          <Skill skillName={'back end'} skills={this.state.backEnd} />
          <Skill skillName={'data science'} skills={this.state.dataScience} />
        </div>
      </div>
    )
  }
}

export default Skills

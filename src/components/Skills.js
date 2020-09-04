import React, { useState } from 'react';
import Skill from './Skill';
import VisibilitySensor from 'react-visibility-sensor';

const Skills = () => {
  const [ languages ] = useState(['javascript', 'python', 'ruby', 'sql' ])
  const [ frontEnd ] = useState([ 'html | css', 'react | redux', 'gsap', 'css frameworks' ])
  const [ backEnd ] = useState([ 'node.js | express', 'django | flask', 'rails | sinatra', 'mongoose' ])
  const [ dataScience ] = useState([ 'pandas', 'bokeh', 'nltk', 'web scraping' ])
  const [ other ] = useState(['sharepoint', 'training software', 'japanese (n2)'])

    return (
        <div id="skills">
          <div id="skills-content">
            <div className="skills-header">skills</div>
            <div className="skills-container">
              <Skill skillName={'languages'} skills={languages} />
              <Skill skillName={'front end'} skills={frontEnd} />
              <Skill skillName={'other'} skills={other} />
            </div>
            <div className="skills-container">
              <Skill skillName={'back end'} skills={backEnd} />
              <Skill skillName={'data science'} skills={dataScience} />
            </div>
          </div>
        </div>
    )
}

export default Skills

import React from 'react';

const Skill = ({ skills, skillName, close }) => {

    return (
      <div className="about-box project-box" id={`${skillName}`} style={{ cursor: 'default' }}>
        <div className="about-bar project-bar">
          <span>{skillName}</span>
          <i class="fas fa-times" onClick={() => close()}/>
        </div>
        <div className="about-content skills-content">
          {skills.map((skill, i) => <p key={i}>{skill}</p>)}
        </div>
      </div>
    )
}

export default Skill

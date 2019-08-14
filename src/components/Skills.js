import React from 'react';

export default function Skills() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein" id="skills-matrix">
    <div className="box skill-box shadow">
      <div className="skills-icon">
        <i class="fas fa-laptop-code icon" />
        <div className="skill-type">languages</div>
      </div>
        <div className="skills-list">
          <div>javascript</div>
          <div>python</div>
          <div>ruby</div>
          <div>sql</div>
        </div>
    </div>
      <div className="box skill-box shadow" id="full-stack">
        <div className="skills-icon">
          <i class="fas fa-layer-group icon" />
          <div className="skill-type">full-stack</div>
        </div>
          <div className="skills-list">
            <div>nodejs | express</div>
            <div>ruby on rails</div>
            <div>django</div>
          </div>
      </div>
      <div className="box skill-box shadow" id="front-end">
        <div className="skills-icon">
          <i className="fas fa-desktop icon" />
          <div className="skill-type">front-end</div>
        </div>
        <div className="skills-list">
          <div>react | redux</div>
          <div>vanilla js</div>
          <div>HTML5 | CSS3</div>
        </div>
      </div>
      <div className="box skill-box shadow" id="git">
        <div className="skills-icon">
          <i className="fab fa-git-alt icon" />
          <div className="skill-type">git</div>
        </div>
        <div className="skills-list">
          <div>version control</div>
          <div>github</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

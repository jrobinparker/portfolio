import React from 'react';

export default function Skills() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein" id="skills-matrix">
    <div className="box shadow">
      <i class="fas fa-laptop-code icon" />
      <div>languages</div>
        <div className="skills-list">
          <div>javascript</div>
          <div>python</div>
          <div>ruby</div>
          <div>sql</div>
        </div>
    </div>
      <div className="box shadow">
        <i class="fas fa-layer-group icon" />
        <div>full-stack</div>
          <div className="skills-list">
            <div>nodejs | express</div>
            <div>ruby on rails</div>
            <div>django</div>
          </div>
      </div>
      <div className="box shadow">
        <i className="fas fa-desktop icon" />
        <div>front-end</div>
        <div className="skills-list">
          <div>react | redux</div>
          <div>vanilla js</div>
          <div>HTML5 | CSS3</div>
        </div>
      </div>
      <div className="box shadow">
        <i className="fab fa-git-alt icon"></i>
        <div>dev best practices</div>
        <div className="skills-list">
          <div>git</div>
          <div>TDD</div>
          <div>mocha | rspec</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

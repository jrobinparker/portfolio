import React from 'react';

export default function Skills() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein" id="skills-matrix">
      <div className="box">
        <i class="fas fa-layer-group skill-icon" />
        <div>back-end | full-stack</div>
          <div className="skills-list">
            <div>nodejs | express</div>
            <div>ruby on rails</div>
            <div>sql | mongoDB</div>
          </div>
      </div>
      <div className="box">
        <i className="fas fa-desktop skill-icon" />
        <div>front-end design</div>
        <div className="skills-list">
          <div>react | redux</div>
          <div>vanilla JS</div>
          <div>HTML5 | CSS3</div>
          <div>semantic UI | material UI | bootstrap</div>
        </div>
      </div>
      <div className="box">
        <i className="fab fa-git-alt"></i>
        <div>development best practices</div>
        <div className="skills-list">
          <div>git | version control</div>
          <div>TDD | BDD</div>
          <div>mocha | rspec</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

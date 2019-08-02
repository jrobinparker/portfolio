import React from 'react';

export default function Skills() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein">
      <div className="box">
        <i class="fas fa-layer-group skill-icon" />
        <div>back-end | full-stack</div>
          <ul className="skills-list">
            <li>nodejs | express</li>
            <li>ruby on rails</li>
            <li>mern stack</li>
            <li>sql | mongoDB</li>
          </ul>
      </div>
      <div className="box">
        <i className="fas fa-desktop skill-icon" />
        <div>front-end design</div>
        <ul className="skills-list">
          <li>react | redux</li>
          <li>vanilla JS</li>
          <li>HTML5 | CSS3</li>
        </ul>
      </div>
      <div className="box">
        <i className="fab fa-git-alt"></i>
        <div>development best practices</div>
        <ul className="skills-list">
          <li>git | version control</li>
          <li>TDD | BDD</li>
          <li>mocha | rspec</li>
        </ul>
      </div>
    </div>
    </React.Fragment>
  )
}

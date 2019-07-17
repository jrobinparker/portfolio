import React from 'react';

export default function Skills() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein">
      <div className="box">
        <i class="fas fa-layer-group skill-icon" />
        <div>full-stack development</div>
          <ul>
            <li>mern stack</li>
            <li>ruby on rails</li>
          </ul>
      </div>
      <div className="box">
        <i className="fas fa-desktop skill-icon" />
        <div>front-end design</div>
        <ul className="front-end">
          <li>react | redux</li>
          <li>vanilla JS</li>
          <li>HTML | CSS</li>
        </ul>
      </div>
      <div className="box">
        <i className="fab fa-git-alt"></i>
        <div>development best practices</div>
        <ul>
          <li>git | version control</li>
          <li>TDD | BDD</li>
          <li>mocha | rspec</li>
        </ul>
      </div>
    </div>
    </React.Fragment>
  )
}

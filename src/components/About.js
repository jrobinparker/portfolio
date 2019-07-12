import React from 'react';

export default function About() {
  return (
    <div className="content">
      <div className="about-me">
        <div className="about-me-image">
          <img src="https://avatars0.githubusercontent.com/u/11745078?s=460&v=4" />
        </div>
        <div className="about-me-text">
          <div className="name">jeremy parker</div>
          <div>location: los angeles, ca</div>
          <div>interests: the 80's, retro video games, japanese art</div>
        </div>
      </div>
        <div className="skills-matrix fadein">
          <div className="box">
            <i class="fas fa-layer-group skill-icon" />
            <div>full-stack development</div>
            <ul>
              <li>MERN stack</li>
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
        <div className="skills-list">
        </div>
      </div>
  )
}

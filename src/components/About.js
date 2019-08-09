import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import { TweenMax } from "gsap/TweenMax";

class About extends React.Component {
  state = {
    navigation: ''
  }

  setSkillsAppear() {
    TweenMax.to('.box', 1, {opacity: 1})
  }

  render() {

    let pageContent

    if (this.state.navigation === 'skills') {
      pageContent = <Skills />
    }

    if (this.state.navigation === 'experience') {
      pageContent = <Experience />
    }

    if (this.state.navigation === 'education') {
      pageContent = <Education />
    }

    if (this.state.navigation === 'other') {
      pageContent = <Interests />
    }

  return (
      <div className="about-content" id="about">
        <div className="about-me" >
              <img src="https://avatars0.githubusercontent.com/u/11745078?s=460&v=4" className="about-me-img shadow"/>
              <a href="https://github.com/jrobinparker" target="_blank">
                <i className="fab fa-github-square icon shadow" />
              </a>
              <a href="https://www.linkedin.com/in/jrobinparker/" target="_blank">
                <i className="fab fa-linkedin icon shadow" />
              </a>
              <i className="fas fa-file icon shadow" />
        </div>
        <div className="about-nav">
          <a onClick={() => this.setState({ navigation: 'skills' })} id="dev">dev skills</a>
          <a onClick={() => this.setState({ navigation: 'experience' })} id="exp">experience</a>
          <a onClick={() => this.setState({ navigation: 'education' })} id="edu">education</a>
          <a onClick={() => this.setState({ navigation: 'other' })} id="int">interests</a>
        </div>
          {pageContent}
        </div>
  )
}
}

export default About

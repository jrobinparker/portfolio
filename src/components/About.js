import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Other from './Other';

class About extends React.Component {
  state = {
    navigation: ''
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
      pageContent = <Other />
    }


  return (
      <div className="content" id="about">
        <div className="about-me">
          <div className="about-me-image">
            <img src="https://avatars0.githubusercontent.com/u/11745078?s=460&v=4" />
          </div>
          <div className="about-me-text">
            <div>github linkedin resume</div>
          </div>
        </div>
        <div className="content-nav">
          <a onClick={() => this.setState({ navigation: 'skills' })}>dev skills</a>
          <a onClick={() => this.setState({ navigation: 'experience' })}>experience</a>
          <a onClick={() => this.setState({ navigation: 'education' })}>education</a>
          <a onClick={() => this.setState({ navigation: 'other' })}>interests</a>
        </div>
          {pageContent}
        </div>
  )
}
}

export default About

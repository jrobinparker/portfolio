import React from 'react';
import Project from './Project';

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: 'employee language scraper',
        tech: ['python', 'beautiful soup', 'pandas', 'selenium', 'tkinter'],
        about: 'The need for language speakers data continued to grow as Analysis Group expanded internationally. We did not have a reporting solution in place to easily gather and report on language data for case staffing or pitches to new clients. Using Selenium and Beautiful Soup to crawl intranet profiles and pandas to build the spreadsheet, I developed a GUI desktop app in tkinter for my teammates to obtain language data easily to assist case managers.'
      },
      {
        name: 'resume analysis',
        tech: ['python', 'nltk', 'pandas']
      },
      {
        name: 'event dashboard',
        tech: ['javascript', 'python', 'bokeh', 'pandas', 'react', 'react router', 'react visibility sensor']
      },
      {
        name: 'renshu',
        tech: ['javascript', '', '']
      },
      {
        name: 'jDictSearch',
        tech: ['javascript', 'axios', 'cheerio', 'gsap', 'react']
      },
      {
        name: 'jchain',
        tech: ['javascript', 'gsap', 'react']
      },
      {
        name: 'Battle at the Shore',
        tech: ['javascript', 'gsap', 'react']
      }
    ]
  }
  render() {

    return (
      <div id="projects">
        <div className="header">Projects</div>
        <div className="projects-container">
          {this.state.projects.map(project => {
            return (
              <div>
                <Project name={project.name} tech={project.tech} about={project.about}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Projects

import React from 'react';
import Project from './Project';

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: 'event app reporting dashboard',
        tech: ['javascript', 'python', 'bulma', 'bokeh', 'pandas', 'flask', 'react', 'react router', 'react visibility sensor'],
        about: 'Every year I help support the A/V elements of the annual New Hire Orientation event, including the mobile app, which includes useful information for attendees. The event project leaders wanted usage statistics for a better understanding of the ROI of the app. Unfortunately, reporting on this data was limited, and could only be exported as deeply-nested JSON. I created a data visualization dashboard to present analysis of usage data with Pandas, Bokeh, Flask, React, and Bulma, which helped the event project leaders quickly gain useful insights into how attendees were utilizing the app.',
        github: null,
        img: 'ago-app-gif.gif'
      },
      {
        name: 'resume analysis',
        tech: ['python', 'nltk', 'pandas'],
        about: 'In addition to a gap in reporting for language data, case leaders could not easy search employee resumes for past experience or employers. I used natural language processing tools and Pandas to analyze employee resumes for specific keywords, delivering higher quality employee metrics for case staffing and marketing initiatives.',
        github: null,
        img: null
      },
      {
        name: 'employee language scraper',
        tech: ['python', 'beautiful soup', 'pandas', 'selenium', 'tkinter'],
        about: 'The need for language speakers data continued to grow as Analysis Group expanded internationally. We did not have a reporting solution to obtain on language data for case staffing or pitches to new clients. Using Selenium and Beautiful Soup to crawl intranet profiles and pandas to build the spreadsheet, I developed an app to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives. I also ported this to a GUI in tkinter for my teammates.',
        github: null,
        img: null
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
                <Project
                  name={project.name}
                  tech={project.tech}
                  about={project.about}
                  img={project.img}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Projects

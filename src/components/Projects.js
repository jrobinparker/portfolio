import React from 'react';
import Project from './Project';
import Slider from './Slider';

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: 'event app reporting dashboard',
        tech: ['javascript', 'python', 'bulma', 'bokeh', 'pandas', 'flask', 'react', 'react router', 'react visibility sensor'],
        about: 'Every year I help support the A/V elements of the annual New Hire Orientation event, including the mobile app, which includes useful information for attendees. The event project leaders wanted usage statistics for a better understanding of the ROI of the app. Unfortunately, reporting on this data was limited, and could only be exported as deeply-nested JSON. I created a data visualization dashboard to present analysis of usage data with Pandas, Bokeh, Flask, React, and Bulma, which helped the event project leaders quickly gain useful insights into how attendees were utilizing the app.',
        github: null,
        img: 'ago-app-gif.gif',
        url: null
      },
      {
        name: 'resume analysis',
        tech: ['python', 'nltk', 'pandas'],
        about: 'Case leaders at Analysis Group could not easy search employee resumes for past experience or employers. I used natural language processing tools and Pandas to analyze employee resumes for specific keywords, delivering higher quality employee metrics for case staffing and marketing initiatives.',
        github: null,
        img: null,
        url: null
      },
      {
        name: 'employee language scraper',
        tech: ['python', 'beautiful soup', 'pandas', 'selenium', 'tkinter'],
        about: 'The need for language speakers data continued to grow as Analysis Group expanded internationally. We did not have a reporting solution to obtain on language data for case staffing or pitches to new clients. Using Selenium and Beautiful Soup to crawl intranet profiles and pandas to build the spreadsheet, I developed an app to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives. I also ported this to a GUI in tkinter for my teammates.',
        github: null,
        img: null,
        url: null
      },
      {
        name: 'renshu',
        tech: ['javascript', 'node', 'express', 'mongodb', 'mongoose', 'bcrypt', 'jwt', 'react', 'react router', 'redux'],
        about: 'I developed this full-stack app as a platform for Japanese learners to create and share lessons with rich text, videos from YouTube and other platforms, and flash card decks. Users can also combine multiple lessons into a course and view a list of courses created and completed. The app uses express and mongodb on the back end, bcrypt and jwt for authentication, redux for state management, and react for the front end.',
        github: 'https://github.com/jrobinparker/renshu',
        img: 'ago-app-gif.gif',
        url: 'https://jrobinparker.github.io/renshu'
      },
      {
        name: 'jDictSearch',
        tech: ['javascript', 'axios', 'cheerio', 'gsap', 'react'],
        about: 'When translating, its useful to search multiple dictionaries to get a wide array of terms. This app searches three separate Japanese-English dictionaries in one search, saving time, effort, and overlap using axios. It scrapes the returned data using cheerio and returns the list of results back to the querySelector.',
        github: 'https://github.com/jrobinparker/jdictsearch',
        img: 'ago-app-gif.gif',
        url: 'https://jrobinparker.github.io/jdictsearch'
      },
      {
        name: 'jchain',
        tech: ['javascript', 'gsap', 'react', 'vectary'],
        about: 'This is a home page for a fictional blockchain. In addition to an animated timeline that resizes based on the viewport size, I also created a hero image using Vectary, an online 3d modeling tool.',
        github: 'https://github.com/jrobinparker/jchain',
        img: 'ago-app-gif.gif',
        url: 'https://jrobinparker.github.io/jchain'
      },
      {
        name: 'Battle at the Shore',
        tech: ['javascript', 'gsap', 'react'],
        about: 'This is the proposed page for an upcoming martial arts tournament in southern New Jersey.',
        github: 'https://github.com/jrobinparker/battle-at-the-shore',
        img: 'ago-app-gif.gif',
        url: 'https://jrobinparker.github.io/battle-at-the-shore',
      }
    ]
  }
  render() {

    return (
      <div id="projects">
        <div className="header">Projects</div>
        <Slider projects={this.state.projects} />
      </div>
    )
  }
}

export default Projects

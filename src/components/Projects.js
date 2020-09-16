import React from 'react';
import Project from './Project';
import ProjectBox from './ProjectBox';
import gsap from 'gsap';

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: 'event app data dashboard',
        languages: ['js', 'python', 'html', 'css'],
        tech: ['bulma', 'bokeh', 'pandas', 'flask', 'react', 'react router', 'react visibility sensor'],
        about: 'Every year I help support the A/V elements of the annual New Hire Orientation event, including the mobile app, which includes useful information for attendees. The event project leaders wanted usage statistics for a better understanding of the ROI of the app. Unfortunately, reporting on this data was limited, and could only be exported as deeply-nested JSON. I created a data visualization dashboard to present analysis of usage data with Pandas, Bokeh, Flask, React, and Bulma, which helped the event project leaders quickly gain useful insights into how attendees were utilizing the app.',
        github: null,
        img: 'ago-app-gif.gif',
        url: null,
        type: 'work'
      },
      {
        name: 'resume analysis',
        languages: ['python'],
        tech: ['nltk', 'pandas'],
        about: 'Case leaders at Analysis Group could not easy search employee resumes for past experience or employers. I used natural language processing tools and Pandas to analyze employee resumes for specific keywords, delivering higher quality employee metrics for case staffing and marketing initiatives.',
        github: null,
        img: null,
        url: null,
        type: 'work'
      },
      {
        name: 'employee language scraper',
        languages: ['python'],
        tech: ['beautiful soup', 'pandas', 'selenium', 'tkinter'],
        about: 'The need for language speakers data continued to grow as Analysis Group expanded internationally. We did not have a reporting solution to obtain on language data for case staffing or pitches to new clients. Using Selenium and Beautiful Soup to crawl intranet profiles and pandas to build the spreadsheet, I developed an app to get language proficiency data from 1000+ employee profiles, providing essential data for international marketing initiatives. I also ported this to a GUI in tkinter for my teammates.',
        github: null,
        img: null,
        url: null,
        type: 'work'
      },
      {
        name: 'lms content downloader',
        languages: ['js', 'html', 'css'],
        tech: ['react', 'axios'],
        about: 'Our learning management system, Docebo, does not have an easy way to download course content outside of the command line. I created an app that connects to the API and allows users to easily download course content.',
        github: 'https://github.com/jrobinparker/jchain',
        img: 'jchain-gif.gif',
        url: 'https://jrobinparker.github.io/jchain',
        type: 'personal'
      },
      {
        name: 'mfc online university',
        languages: ['js', 'html', 'css'],
        tech: ['node', 'express', 'mongodb', 'mongoose', 'bcrypt', 'jwt', 'react', 'react router', 'redux', 'ffmpeg', 'react player', 'paypal api'],
        about: 'This is the proposed page for an upcoming martial arts tournament in southern New Jersey.',
        github: 'https://github.com/jrobinparker/battle-at-the-shore',
        img: 'bats-gif.gif',
        url: 'https://jrobinparker.github.io/battle-at-the-shore',
        type: 'personal'
      },
      {
        name: 'renshu',
        languages: ['js', 'html', 'css'],
        tech: ['node', 'express', 'mongodb', 'mongoose', 'bcrypt', 'jwt', 'react', 'react router', 'redux'],
        about: 'This MERN full-stack app is a platform for Japanese learners to create and share lessons with rich text, videos from YouTube and other platforms, and flash card decks. Users can also combine multiple lessons into a course and view a list of courses created and completed. The app uses express and mongodb on the back end, bcrypt and jwt for authentication, redux for state management, and react for the front end.',
        github: 'https://github.com/jrobinparker/renshu',
        img: 'renshu-gif.gif',
        url: 'https://guarded-escarpment-15012.herokuapp.com/',
        type: 'personal'
      },
      {
        name: 'jDictSearch',
        languages: ['js', 'ruby', 'html', 'css'],
        tech: ['axios', 'cheerio', 'gsap', 'react'],
        about: 'When translating, its useful to search multiple dictionaries to get a wide array of terms. This app searches three separate Japanese-English dictionaries in one search, saving time, effort, and overlap using axios. It scrapes the returned data using cheerio and returns the list of results back to the user.',
        github: 'https://github.com/jrobinparker/jdictsearch',
        img: 'jdict-gif.gif',
        url: 'https://jrobinparker.github.io/jdictsearch',
        type: 'personal'
      },
      {
        name: 'jchain',
        languages: ['js', 'html', 'css'],
        tech: ['gsap', 'react', 'vectary'],
        about: 'This is a home page for a fictional blockchain. In addition to an animated timeline that resizes based on the viewport size, I also created a hero image using Vectary, an online 3d modeling tool.',
        github: 'https://github.com/jrobinparker/jchain',
        img: 'jchain-gif.gif',
        url: 'https://jrobinparker.github.io/jchain',
        type: 'personal'
      }
    ]
  }

  componentDidMount() {
    const header = document.getElementById('projects-header')
    const projects = document.querySelectorAll('.project-box')
    const project1 = document.querySelectorAll('.project-box')[0]
    const project2 = document.querySelectorAll('.project-box')[1]
    const project3 = document.querySelectorAll('.project-box')[2]
    const project4 = document.querySelectorAll('.project-box')[3]
    const project5 = document.querySelectorAll('.project-box')[4]
    const project6 = document.querySelectorAll('.project-box')[5]
    const project7 = document.querySelectorAll('.project-box')[6]
    const project8 = document.querySelectorAll('.project-box')[7]
    const displayProjects = gsap.timeline();

    gsap.set(header, {opacity: 0, y: 50})
    gsap.to(header, .5, {opacity: 1, y: 0})
    gsap.set(projects, {opacity: 0, y: 50})

    displayProjects
        .to(header, {opacity: 1, y: 0})
        .to(project1, .25, {opacity: 1, y: 0})
        .to(project2, .25, {opacity: 1, y: 0})
        .to(project3, .25, {opacity: 1, y: 0})
        .to(project4, .25, {opacity: 1, y: 0})
        .to(project5, .25, {opacity: 1, y: 0})
        .to(project6, .25, {opacity: 1, y: 0})
        .to(project7, .25, {opacity: 1, y: 0})
        .to(project8, .25, {opacity: 1, y: 0})
  }

  render() {

    return (
      <div id="projects">
        <div className="header" id="projects-header">Projects</div>
        <div className="projects-grid">
          {this.state.projects.map(proj => <ProjectBox proj={proj} />)}
        </div>
      </div>
    )
  }
}

export default Projects

import React, { useState, useEffect } from 'react';
import ProjectBox from './ProjectBox';
import Header from './Header';
import gsap from 'gsap';

const Projects = ({ history }) => {
  const [ projectInfo ] = useState([
      {
        name: 'Event App Data Dashboard',
        languages: ['js', 'python', 'html', 'css'],
        tech: ['bokeh', 'pandas', 'flask', 'react', 'react router', 'react visibility sensor'],
        about: 'Every year I help support the A/V elements of the annual New Hire Orientation event, including the mobile app, which includes useful information for attendees. The event project leaders wanted usage statistics for a better understanding of the ROI of the app. Unfortunately, reporting on this data was limited, and could only be exported as deeply-nested JSON. I created a data visualization dashboard to present analysis of usage data with Pandas, Bokeh, Flask, React, and Bulma, which helped the event project leaders quickly gain useful insights into how attendees were utilizing the app.',
        github: null,
        img: 'ago-img.png',
        url: null,
        type: 'work'
      },
      {
        name: 'Resume Analysis',
        languages: ['python'],
        tech: ['nltk', 'pandas'],
        about: 'Case leaders at Analysis Group use employee data--such as past work experience--to assemble case teams for projects. While employee resumes are posted on the corporate intranet, the search engine does not index the contents of them. I used natural language processing tools and Pandas to analyze employee resumes for specific keywords, delivering higher quality employee metrics for case staffing and marketing initiatives.',
        github: null,
        img: 'resume-img.png',
        url: null,
        type: 'work'
      },
      {
        name: 'Employee Language Scraper Bot',
        languages: ['python'],
        tech: ['beautiful soup', 'pandas', 'selenium', 'tkinter'],
        about: 'The need for language speakers data continued to grow as Analysis Group expanded internationally. We did not have a reporting solution to obtain on language data, making case staffing for international projects and pitches to new clients difficult. Using Selenium and Beautiful Soup to scrape intranet profiles and Pandas to build the spreadsheet, I developed an app to get language proficiency data from 1000+ employee profiles, providing essential data for international projects and marketing initiatives. I also ported this to a GUI in tkinter for my teammates and separately scheduled the code to run nightly and save the spreadsheet to a shared team folder.',
        github: null,
        img: 'languages-img.png',
        url: null,
        type: 'work'
      },
      {
        name: 'LMS Content Downloader',
        languages: ['js', 'html', 'css'],
        tech: ['react', 'axios'],
        about: 'This summer, as we were building out the training program for summer interns, a number of trainers mentioned the need to be able to combine course content from separate courses into one large course. Our learning management system, Docebo, does not allow course instructors or admins to download video content through the browser. On top of that, the screen recording program used by the LMS only saves recorded videos to the server, so instructors had no way to upload their created content into new courses. I created an app that connects to the API and allows users to easily download course content. This app saved instructors from having to recreate videos from scratch, and allowed us to quickly create custom courses for the intern training program using existing content.',
        github: null,
        img: 'agu-img.png',
        url: null,
        type: 'work'
      },
      {
        name: 'MFC Online University',
        languages: ['js', 'html', 'css'],
        tech: ['node', 'mongodb', 'bcrypt', 'jwt', 'react', 'redux', 'grid-fs'],
        about: 'MFC Online University is an online training portal for Modern Fighting Concepts in Absecon, New Jersey. Primarily designed for students who cannot attend live classes due to COVID-19, users can create a paid account to view online videos uploaded by the instructors. This MERN app uses express and mongodb on the back end, bcrypt and jwt for authentication, redux for state management, and react for the front end. Videos are processed using ffmpeg and saved in mongodb using grid-fs.',
        github: null,
        img: 'mfc-img.png',
        url: 'https://www.mfcuniversity.com',
        type: 'freelance'
      },
      {
        name: 'Renshu',
        languages: ['js', 'html', 'css'],
        tech: ['node', 'express', 'mongodb', 'mongoose', 'bcrypt', 'jwt', 'react', 'react router', 'redux', 'heroku'],
        about: 'Renshu--my first full-stack MERN app--is a community for Japanese learners to create and share lessons with text, videos, and flash card decks. Users can also combine multiple lessons into a course and view a list of courses created and completed. The app uses express and mongodb on the back end, bcrypt and jwt for authentication, redux for state management, and react for the front end.',
        github: 'https://github.com/jrobinparker/renshu',
        img: 'renshu-img.png',
        url: 'https://guarded-escarpment-15012.herokuapp.com/',
        type: 'personal'
      },
      {
        name: 'jDictSearch',
        languages: ['js', 'html', 'css'],
        tech: ['axios', 'cheerio', 'gsap', 'react'],
        about: 'When translating, it is useful to search multiple dictionaries to get a wide array of matching terms. This is essential when translating Japanese, as words can have a number of different corresponding meanings in English. This app searches three separate Japanese-English dictionaries in one search, saving time, effort, and overlap. I used axios to send the search term to each of the dictionaries and cheerio to extract the results from the returned data. The results are animated with GSAP and displayed in modals.',
        github: 'https://github.com/jrobinparker/jdictsearch',
        img: 'jdict-img.png',
        url: 'https://jrobinparker.github.io/jdictsearch',
        type: 'personal'
      },
      {
        name: 'jchain',
        languages: ['js', 'html', 'css'],
        tech: ['gsap', 'react', 'vectary'],
        about: 'Taking inspiration from a number of blockchain and cryptocurrency sites, I created a site for a fictional blockchain. This site uses React Visibility Sensor and GSAP for animations. The timeline resizes and reorients with an event listener that watches for window resizes and orientation changes.',
        github: 'https://github.com/jrobinparker/jchain',
        img: 'jchain-img.png',
        url: 'https://j-chain.herokuapp.com/',
        type: 'personal'
      }
    ])

  const openAnimation = () => {
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

    gsap.set(header, {y: 50})
    gsap.set(projects, {y: 50})

    displayProjects
        .to(header, .25, {delay: .25, opacity: 1, y: 0})
        .to(project1, .25, {opacity: 1, y: 0})
        .to(project2, .25, {opacity: 1, y: 0})
        .to(project3, .25, {opacity: 1, y: 0})
        .to(project4, .25, {opacity: 1, y: 0})
        .to(project5, .25, {opacity: 1, y: 0})
        .to(project6, .25, {opacity: 1, y: 0})
        .to(project7, .25, {opacity: 1, y: 0})
        .to(project8, .25, {opacity: 1, y: 0})
  }

  useEffect(() => {
    openAnimation()
  }, [])

  const closeAnimation = async () => {
    const header = document.getElementById('projects-header')
    const projects = document.querySelector('.projects-grid')
    const removeProjects = gsap.timeline();

    await removeProjects
      .to(projects, .2, { opacity: 0, y: 50 })
      .to(header, .2, { opacity: 0, y: 50 })
  }

  const close = async () => {
    await closeAnimation()
    history.push('/')
  }


    return (
      <div id="projects">
        <Header headerId={'projects-header'} headerText={'Projects'} />
        <div className="projects-grid">
          {projectInfo.map((proj, i) => <ProjectBox proj={proj} close={close} key={i} />)}
        </div>
      </div>
    )
}

export default Projects

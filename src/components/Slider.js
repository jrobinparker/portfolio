import React, { useState } from 'react';
import Project from './Project';

const Slider = props => {
  const [ x, setX ] = useState(0);
  const [projects, setProjects] = useState(props.projects)

  const goLeft = () => {
    x === 0 ? setX(-100 * (projects.length - 1)) : setX(x + 100)
    console.log(x)
  }

  const goRight = () => {
    x === -100 * (projects.length - 1) ? setX(0) : setX(x - 100)
    console.log(x)
  }

  return (
    <div>
      <div className="filters">
        <div
          className="header"
          id="all"
          onClick={() => {
            setProjects(props.projects)
            setX(0)
        }}
        >
          all
        </div>
        <div
          className="header"
          onClick={() => {
            setProjects(props.projects.filter(project => project.type === 'work'))
            setX(0)
            console.log(x)
        }}>
          work
        </div>
        <div
          className="header"
          onClick={() => {
            setProjects(props.projects.filter(project => project.type === 'personal'))
            setX(0)
            console.log(x)
        }}>
          personal
        </div>
      </div>
    <div className="slider">
      {projects.map((project, i) => {
        return (
          <div key={i} style={{ transform: `translateX(${x}%)`, transition: '0.5s' }}>
            <Project
              name={project.name}
              tech={project.tech}
              about={project.about}
              github={project.github}
              img={project.img}
              url={project.url}
              type={project.type}
            />
          </div>
        )
      })}
      <button id="left" className="slider-button" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button id="right" className="slider-button" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
    </div>
  )
}

export default Slider;

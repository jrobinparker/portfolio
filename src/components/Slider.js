import React, { useState } from 'react';
import Project from './Project';

const Slider = props => {
  const { projects } = props;
  const [ x, setX ] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (projects.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (projects.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
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
  )
}

export default Slider;

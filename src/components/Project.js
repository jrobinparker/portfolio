import React from 'react';

const Project = props => {
  const { name, tech, about } = props
  return(
    <div className="project-item">
        <div className="project-img">
        </div>
        <div className="project-about">
          <div className="header subheader">{name}</div>
          <ul>
            {
              tech.map(t => {
                return <li>{t}</li>
              })
            }
          </ul>
          <p className="project-text">
            {about}
          </p>
        </div>
    </div>
  )
}

export default Project

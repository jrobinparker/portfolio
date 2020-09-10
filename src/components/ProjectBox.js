import React, { Fragment } from 'react';
import ProjectLanguages from './ProjectLanguages';

const ProjectBox = ({ proj: { name, languages, tech, about, github, img, url, number } }) => {
  return (
    <div className="project-box">
      {img ? (
        <div className="project-img">
          <img src={require(`../assets/${img}`)} />
        </div>
      ) : <Fragment></Fragment>}
      <div className="project-about">
        <h3>{name}</h3>
        <div className="project-languages">
          <ProjectLanguages languages={languages} />
        </div>
      </div>
    </div>
  )
};

export default ProjectBox;

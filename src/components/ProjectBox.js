import React, { Fragment, useState } from 'react';
import ProjectLanguages from './ProjectLanguages';
import ProjectModal from './ProjectModal';

const ProjectBox = ({ proj }) => {
  const [ modal, toggleModal ] = useState(false);

  const { name, languages, tech, about, github, img, url, number } = proj

  const openModal = () => {
    toggleModal(true)
    document.body.style.overflowY = 'hidden'
    document.getElementById(`${name}`).scrollIntoView({ behavior: 'smooth' })
  }

  const closeModal = () => {
    toggleModal(false)
    document.body.style.overflowY = 'scroll'
  }

  return (
    <Fragment>
      <div className="project-box" id={`${name}`}>
        {img ? (
          <div className="project-img">
            <img src={require(`../assets/${img}`)} />
          </div>
        ) : <Fragment></Fragment>}
        <div className="project-about">
          <h3 onClick={() => openModal(true)}>{name}</h3>
          <div className="project-languages">
            <ProjectLanguages languages={languages} />
          </div>
        </div>
      </div>
      { !modal ? <></> : <ProjectModal proj={proj} closeModal={() => closeModal(false)} /> }
    </Fragment>
  )
};

export default ProjectBox;

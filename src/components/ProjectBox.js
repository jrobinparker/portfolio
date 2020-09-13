import React, { Fragment, useState } from 'react';
import ProjectLanguages from './ProjectLanguages';
import ProjectModal from './ProjectModal';
import gsap from 'gsap';

const ProjectBox = ({ proj }) => {
  const [ modal, toggleModal ] = useState(false);

  const { name, languages, tech, about, github, img, url, number } = proj

  const openModal = () => {
    toggleModal(true)
  }

  const closeModal = () => {
    const modalBg = document.querySelector('.project-modal')
    const modalCard = document.querySelector('.modal-card')
    const tl = gsap.timeline();

    tl.to(modalCard, .25, {opacity: 0, y: 50});
    tl.to(modalBg, .25, {className: 'fade-out'})

    toggleModal(false)
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

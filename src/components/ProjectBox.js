import React, { Fragment, useState } from 'react';
import ProjectLanguages from './ProjectLanguages';
import ProjectModal from './ProjectModal';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
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
      <div className="about-box project-box" id={`${name}`} onClick={e => {
        e.preventDefault()
        openModal(true)}
      }>
      <div className="about-bar project-bar">
        {name}
      </div>
        <div className="about-content project-content">
          <div className="about-img project-img">
            {img ? (
              <img src={require(`../assets/${img}`)} />
            ): (<Fragment></Fragment>)}
            <div className="about-info project-info">
              <div className="project-languages">
                <ProjectLanguages languages={languages} />
              </div>
            </div>
          </div>

        </div>
      </div>
      { !modal ? <></> : <ProjectModal proj={proj} closeModal={() => closeModal(false)} /> }
    </Fragment>
  )
};

export default ProjectBox;

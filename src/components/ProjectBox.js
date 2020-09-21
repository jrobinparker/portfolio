import React, { Fragment, useState } from 'react';
import ProjectLanguages from './ProjectLanguages';
import ProjectModal from './ProjectModal';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import gsap from 'gsap';

const ProjectBox = ({ proj }) => {
  const [ modal, toggleModal ] = useState(false);

  const { name, languages, tech, about, github, img, url, number } = proj

  const openModal = async () => {
    toggleModal(true)
  }

  const closeAnimation = async () => {
    const modalParent = document.querySelector('.project-modal')
    const modalBg = document.querySelector('.project-modal')
    const modalCard = document.querySelector('.modal')
    const title = document.querySelector('.project-bar-title')
    const icon = document.querySelector('.fas')
    const abtImg = document.querySelector('.modal-img')
    const abtTextCt = document.querySelector('.modal')
    const abtText = document.querySelector('.modal-content')
    const rule = CSSRulePlugin.getRule(".about-text-container:after")
    const tl = gsap.timeline()


    await tl
      .to(abtText, .2, { opacity: 0 })
      .to(abtTextCt, {delay: .25, duration: .5, ease: Power1.easeIn, opacity: 0, height: '0vh', width: '0vw' })
      .to(title, .2, {opacity: 0})
      .to(modalParent, .25, {opacity: 0})
  }

  const closeModal = async () => {
    await closeAnimation()
    await toggleModal(false)
  }

  return (
    <Fragment>
      <div className="about-box project-box" id={`${name}`} onClick={e => {
        e.preventDefault()
        openModal(true)}
      }>
      <div className="about-bar project-bar">
        <span>{name}</span>
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
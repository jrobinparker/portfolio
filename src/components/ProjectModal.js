import React, { Fragment, useEffect } from 'react';
import ProjectLanguages from './ProjectLanguages';
import gsap from 'gsap';
import { createPortal } from 'react-dom';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const ProjectModal = ({ proj: { name, languages, tech, about, github, img, url, number }, closeModal }) => {

  useEffect(() => {
    const modal = document.querySelector('.modal')
    gsap.set(modal, {y: 50})
    gsap.to(modal, .25, {delay: .1, opacity: 1, y: 0})
  }, []);

  return createPortal(
    <div className="project-modal fade-in">
      <div className="about-box modal" id={`${name}`}>
      <div className="about-bar">
        <i class="fas fa-times" onClick={e => closeModal(e)}/>
      </div>
        <div className="about-content project-content">
          <div className="about-img project-img">
          {img ? (
            <div className="modal-img">
              <img src={require(`../assets/${img}`)} />
              <span className="modal-languages"><ProjectLanguages languages={languages} /></span>
              <div className="tech-list">
                <ul>
                  {tech.map(t => <li>{t}</li>)}
                </ul>
              </div>
            </div>
          ) : <Fragment></Fragment>}
            <div className="about-info">
              {about}
            </div>
          </div>

        </div>
      </div>
    </div>
    ,
    document.querySelector('#project-modal')
  )
}

export default ProjectModal;

import React, { Fragment, useEffect } from 'react';
import ProjectLanguages from './ProjectLanguages';
import gsap from 'gsap';
import { createPortal } from 'react-dom';

const ProjectModal = ({ proj: { name, languages, tech, about, github, img, url, number }, closeModal }) => {

  useEffect(() => {
    const modal = document.querySelector('.modal-card')
    gsap.set(modal, {y: 50})
    gsap.to(modal, .25, {delay: .1, opacity: 1, y: 0})
  }, []);

  return createPortal(
    <div className="project-modal fade-in">
      <div className="modal-card" id={`${name}`}>
        <div className="modal-card-header">
          <div className="header modal-header">{name}</div>
          <i className="fas fa-times modal-close" onClick={e => closeModal(e)} />
        </div>
        <div className="modal-body">
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
          <div className="modal-text">
            {about}
          </div>
        </div>
      </div>
    </div>
    ,
    document.querySelector('#project-modal')
  )
}

export default ProjectModal;

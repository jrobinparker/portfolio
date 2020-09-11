import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ proj: { name, languages, tech, about, github, img, url, number }, closeModal }) => {

  useEffect(() => {
  }, []);

  return createPortal(
    <div className="project-modal">
      <div className="modal-card">
        <div className="modal-card-header">
          {name}
          <i className="fas fa-times modal-close" onClick={e => closeModal(e)} />
        </div>
        <div className="modal-body">
          {tech.map(t => <p>{t}</p>)}
        </div>
      </div>
    </div>
    ,
    document.querySelector('#project-modal')
  )
}

export default ProjectModal;

import React from 'react';

const ModalButton =({ text, link }) => {
  return (
    <button className="modal-button">
      <a href={link} target="blank" rel="noopener noreferrer">{text}</a>
    </button>
  )
}

export default ModalButton;

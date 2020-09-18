import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutInfo = ({ text, number }) => {
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';


  function type() {
    if (!document.querySelectorAll('.about-data-item')[number]) {
      return
    } else {
      currentText = text;
      letter = currentText.slice(0, ++index)
      document.querySelectorAll('.about-data-item')[number].textContent = letter;
      if (letter.length === currentText.length) {
        index = letter.length;
      }
      setTimeout(type, 150)
    }

  };

  useEffect(() => {
    type()
  }, [])

  return (
    <div className="item">
      <span className="about-data-item" style={{ color: 'white' }}></span>
    </div>
  )
};

export default AboutInfo;

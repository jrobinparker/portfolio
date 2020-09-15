import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeLink = ({ link, text, number }) => {
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';


  function type() {
    if (!document.querySelectorAll('.link-text')[number]) {
      return
    } else {
      currentText = text;
      letter = currentText.slice(0, ++index)
      document.querySelectorAll('.link-text')[number].textContent = letter;
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
    <div className="item link">
      <Link to={`/${link}`}><span className="link-text"></span></Link>
    </div>
  )
};

export default HomeLink;

import React, { useEffect } from 'react';

const AboutInfo = ({ itemType, itemText, number, order, itemLink }) => {
  let index = 0;
  let currentText = '';
  let letter = '';


  useEffect(() => {
    type()
  })

  function type() {
      if (!document.querySelectorAll('.about-data-item')[number]) {
        return
      } else {
        currentText = itemText;
        letter = currentText.slice(0, ++index)
        document.querySelectorAll('.about-data-item')[number].textContent = letter

        if (letter.length === currentText.length) {
          index = letter.length;
        }
        setTimeout(type, 150)
      }
    };

    return itemType !== 'link' ? (
        <div className="item">
          <span className="about-data-item" style={{ color: 'white' }}></span>
        </div>
      ) : (
        <div className="item">
          <a href={`${itemLink}`} target='blank'>
            <span className="about-data-item" style={{ color: 'white' }}></span>
          </a>
        </div>
      )

};

export default AboutInfo;

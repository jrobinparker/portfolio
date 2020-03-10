import React from 'react';
import gsap from 'gsap';

const FilterButton = props => {
    const { name, filter, type } = props

    const addHighlight = () => {
      const highLight = document.getElementById(name)
      if (name === 'all') {
        gsap.to(highLight, .25, {width: 35})
      }
      if (name === 'work') {
       gsap.to(highLight, .25, {width: 75})
      }
      if (name === 'personal') {
       gsap.to(highLight, .25, {width: 115})
      }
    }

    const removeHighlight = () => {
      const underLine = document.getElementById(name)
      gsap.to(underLine, .5, {width: 0})
    }

    return (
        <div
          className="header filter"
          onClick={filter}
          onMouseEnter={addHighlight}
          onMouseLeave={removeHighlight}
        >
          {name}
          <span className="highlight" id={`${name}`}></span>
        </div>
    )
}

export default FilterButton

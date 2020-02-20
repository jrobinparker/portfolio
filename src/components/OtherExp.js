import React from 'react';

const OtherExp = props => {
  const { company, location, title, length } = props.expData

  return (
    <div className="other-exp-items">
      <div className="items">
        <div className="other-exp-item">
          <span className="other-exp-text">{company}</span>
        </div>
        <div className="other-exp-item">
          <span className="other-exp-text">{location}</span>
        </div>
        <div className="other-exp-item">
          <span className="other-exp-text">{title}</span>
        </div>
        <div className="other-exp-item">
          <span className="other-exp-text">{length}</span>
        </div>
      </div>
    </div>
  )
}

export default OtherExp;

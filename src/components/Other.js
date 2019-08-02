import React from 'react';

export default function Other() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein">
      <div className="box">
        <i className="fas fa-language skill-icon" />
        <div className="interest">japanese</div>
      </div>
      <div className="box">
        <i className="fas fa-compact-disc skill-icon" />
        <div className="interest">1980s</div>
      </div>
      <div className="box">
        <i className="fab fa-btc skill-icon" />
        <div className="interest">cryptocurrency</div>
      </div>
      <div className="box">
        <i className="fas fa-paint-brush skill-icon" />
        <div className="interest" style={{ textAlign: 'center' }}>art</div>
      </div>
    </div>
    </React.Fragment>
  )
}

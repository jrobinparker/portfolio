import React from 'react';

export default function Interests() {
  return (
    <React.Fragment>
    <div className="skills-matrix fadein">
      <div className="box int-box shadow">
        <i className="fas fa-language icon" />
        <div className="interest">japanese</div>
      </div>
      <div className="box int-box shadow">
        <i className="fas fa-compact-disc icon" />
        <div className="interest">1980s</div>
      </div>
      <div className="box int-box shadow">
        <i className="fab fa-btc icon" />
        <div className="interest" id="crypto">crypto</div>
      </div>
      <div className="box int-box shadow">
        <i className="fas fa-paint-brush icon" />
        <div className="interest" id="art">art</div>
      </div>
    </div>
    </React.Fragment>
  )
}

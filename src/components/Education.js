import React from 'react';

export default function Education() {
  return (
    <React.Fragment>
    <div className="education-matrix fadein">
      <div className="box">
        <i class="fas fa-code skill-icon" />
        <div>full-stack developer</div>
          <div className="skills-list">
            <div>flatiron school (online)</div>
          </div>
      </div>
      <div className="box">
        <i className="fas fa-university skill-icon" />
        <div>MSLIS</div>
        <div className="skills-list">
          <div>library and information science</div>
          <div>catholic university of america</div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-globe-asia skill-icon"></i>
        <div>BA</div>
        <div className="skills-list">
          <div>history and east asian studies</div>
          <div>northeastern university</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

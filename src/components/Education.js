import React from 'react';

export default function Education() {
  return (
    <React.Fragment>
    <div className="skills-matrix edu-matrix fadein">
      <div className="box edu-box shadow" id="dev-box">
        <div className="skills-icon">
          <i class="fas fa-code icon" />
          <div className="skill-type">full-stack developer</div>
        </div>
          <div className="skills-list">
            <div>flatiron school (online)</div>
          </div>
      </div>
      <div className="box edu-box shadow" id="ma-box">
        <div className="skills-icon">
          <i className="fas fa-university icon" />
          <div>MSLIS</div>
        </div>
        <div className="skills-list">
          <div>library and info science</div>
          <div>catholic university of america</div>
        </div>
      </div>
      <div className="box edu-box shadow" id="ba-box">
        <div className="skills-icon">
          <i className="fas fa-globe-asia icon"></i>
          <div>BA</div>
        </div>
        <div className="skills-list">
          <div>history and east asian studies</div>
          <div>northeastern university</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

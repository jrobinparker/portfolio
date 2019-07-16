import React from 'react';

export default function Education() {
  return (
    <React.Fragment>
    <div className="education-matrix fadein">
      <div className="box">
        <i class="fas fa-code skill-icon" />
        <div>full-stack developer</div>
          <ul style={{ marginLeft: '-7%' }}>
            <li>flatiron school (online)</li>
          </ul>
      </div>
      <div className="box grad">
        <i className="fas fa-university skill-icon" />
        <div>MSLIS</div>
        <ul>
          <li>library and information science</li>
          <li>catholic university of america</li>
        </ul>
      </div>
      <div className="box ba">
        <i className="fas fa-globe-asia skill-icon"></i>
        <div>BA</div>
        <ul>
          <li>history and east asian studies</li>
          <li>northeastern university</li>
        </ul>
      </div>
    </div>
    </React.Fragment>
  )
}

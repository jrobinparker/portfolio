import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {

  render() {

  return (
    <div>
    <div className="home-text fadein-up">
      <div className="welcome-text">
        <div>i'm <span style={{ color: 'blue' }}>jeremy parker</span>,</div>
        <div className="languages">an aspiring web developer from los angeles, ca</div>
        <div className="links">
          <Link to ="/about">about</Link>
          <a>sites</a>
          <a>contact</a>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default Body

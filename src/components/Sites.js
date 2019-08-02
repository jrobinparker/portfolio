import React from 'react';
import { Link } from 'react-router-dom';

class Sites extends React.Component {
  state = {
    sites: [
      {
        title: "renshu",
        about: "a community-driven japanese learning app",
        tech: ["mongo DB", "express", "bcrypt", "passport", "jwt authentication", "react", "redux", "semantic ui"],
        images: [ "https://i.kinja-img.com/gawker-media/image/upload/s--bz_RF1im--/c_scale,f_auto,fl_progressive,q_80,w_800/vjgldb6sfwcbwimcsb5f.jpg", "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/Streets-of-Rage-2-second-920x584.jpg" ]
      }
    ]
  }

  render() {

  return (
    <div className="sites-matrix" id="sites">
        <div className="box">
          <i class="fas fa-code skill-icon" />
          <div>renshu</div>
            <ul style={{ marginLeft: '-7%' }} className="site-info">
              <li>a community-driven Japanese learning platform</li>
              <li>node/express</li>
              <li>mongoDB</li>
              <li>react</li>
              <li>react router</li>
              <li>redux</li>
              <li>vanilla js</li>
            </ul>
        </div>
        <div className="box">
          <i className="fas fa-university skill-icon" />
          <div>jdictsearch</div>
          <ul className="site-info">
            <li>searches and scrapes 3 english-japanese dictionaries</li>
            <li>react</li>
            <li>cheerio (client-side scraper)</li>
            <li>material ui</li>
          </ul>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia skill-icon"></i>
          <div>jchain</div>
          <ul className="site-info">
            <li>home page of a (fictional) blockchain company</li>
            <li>react</li>
            <li>react visibility sensor</li>
            <li>vanilla js</li>
            <li>css flexbox</li>
          </ul>
        </div>
    </div>
    )
  }
}

export default Sites

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
    <div className="sites-matrix fadein">

    </div>
    )
  }
}

export default Sites

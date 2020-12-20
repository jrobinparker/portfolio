import React from 'react';

const ProjectLanguages = ({ languages }) => {
  return languages.map((l, i) => {
    switch(l) {
      case 'css': return <i className="fab fa-css3-alt" style={{ color: 'limegreen' }}  key={i}/>
      case 'html': return <i className="fab fa-html5" style={{ color: 'magenta' }} key={i}/>
      case 'js': return <i className="fab fa-js" style={{ color: 'yellow' }} key={i}/>
      case 'python': return <i className="fab fa-python" style={{ color: 'skyblue' }} key={i}/>
      case 'ruby': return <i className="far fa-gem" style={{ color: 'red' }} key={i}/>
      default: return <i className="fab fa-js" style={{ color: 'yellow' }} key={i}/>
    }
  })
};

export default ProjectLanguages;

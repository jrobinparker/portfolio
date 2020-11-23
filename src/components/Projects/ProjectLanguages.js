import React from 'react';

const ProjectLanguages = ({ languages }) => {
  return languages.map(l => {
    switch(l) {
      case 'css': return <i className="fab fa-css3-alt" style={{ color: 'limegreen' }}/>
      case 'html': return <i class="fab fa-html5" style={{ color: 'magenta' }}/>
      case 'js': return <i class="fab fa-js" style={{ color: 'yellow' }}/>
      case 'python': return <i class="fab fa-python" style={{ color: 'skyblue' }}/>
      case 'ruby': return <i class="far fa-gem" style={{ color: 'red' }}/>
      default: return <i class="fab fa-js" style={{ color: 'yellow' }}/>
    }
  })
};

export default ProjectLanguages;

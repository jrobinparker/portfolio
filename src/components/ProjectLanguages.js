import React from 'react';

const ProjectLanguages = ({ languages }) => {
  return languages.map(l => {
    if (l === 'css') {
      return <i className="fab fa-css3-alt" style={{ color: ' green' }}/>
    }

    if (l === 'html') {
      return <i class="fab fa-html5" style={{ color: 'purple' }}/>
    }

    if (l === 'js') {
      return <i class="fab fa-js" style={{ color: 'yellow' }}/>
    }

    if (l === 'python') {
      return <i class="fab fa-python" style={{ color: 'blue' }}/>
    }

    if (l === 'ruby') {
      return <i class="far fa-gem" style={{ color: 'red' }}/>
    }
   })
};

export default ProjectLanguages;

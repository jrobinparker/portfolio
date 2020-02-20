import React from 'react';

const Project = props => {
  const { name, tech, about, github, img } = props
  return(
    <div className="project-item">
      {img ? (
        <React.Fragment>
          <div className="project-img">
            <img src={require(`../assets/${img}`)} />
          </div>
          <div className="project-about">
            <div className="header subheader project-header">{name}</div>
            <ul>
              {
                tech.map(t => {
                  return <li>{t}</li>
                })
              }
            </ul>
            <p className="project-text">
              {about}
            </p>
            <div className="git">
              {!github ? (
                <p className="project-text">work project -- not shareable</p>
              ) : (
                <p>link></p>
              )}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <div className="project-about" style={{position: 'relative', top: '15%'}}>
          <div className="header subheader project-header">{name}</div>
          <ul>
            {
              tech.map(t => {
                return <li>{t}</li>
              })
            }
          </ul>
          <p className="project-text" style={{width: '70vw'}}>
            {about}
          </p>
          <div className="git">
            {!github ? (
              <p className="project-text">work project -- code not shareable</p>
            ) : (
              <p>link></p>
            )}
          </div>
        </div>
        </React.Fragment>
      )}


    </div>
  )
}

export default Project

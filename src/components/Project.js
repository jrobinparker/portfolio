import React from 'react';

const Project = props => {
  const { name, tech, about, github, img, url } = props
  return(
    <div className="slide">
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
            <div className="project-links">
                {!github ? (
                  null
                ) : (
                  <div className="git">
                    <i className="fab fa-github-square proj-icon"
                      onClick={() => window.open(github, '_blank')}
                    />
                  </div>
                )}
                {!url ? (
                  null
                ) : (
                  <div className="git">
                    <i className="fas fa-external-link-square-alt proj-icon"
                      onClick={() => window.open(url, '_blank')}
                    />
                  </div>
                )}
              </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <div className="project-about no-img" style={{position: 'relative', top: '15%'}}>
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
          <div className="project-links">
              {!github ? (
                null
              ) : (
                  <i className="fab fa-github-square proj-icon"
                  onClick={() => window.open(github, '_blank')}
                  />
              )}
            {!url ? (
              null
            ) : (
                <i className="fas fa-external-link-square-alt proj-icon"
                  onClick={() => window.open(url, '_blank')}
                />
            )}
            </div>
        </div>
        </React.Fragment>
      )}


    </div>
  )
}

export default Project

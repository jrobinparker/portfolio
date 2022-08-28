import React from "react";
import gsap from "gsap";

const Project = (props) => {
  const { name, tech, about, github, img, url, number } = props;

  const showLink = (className) => {
    const git = document.getElementById(`${className}`);
    gsap.to(git, 0.2, { y: 5, opacity: 1 });
  };

  const hideLink = (className) => {
    const git = document.getElementById(`${className}`);
    gsap.to(git, 0.2, { y: -5, opacity: 0 });
  };

  return (
    <div className="slide">
      {img ? (
        <React.Fragment>
          <div className="project-img">
            <img src={require(`../assets/${img}`)} />
          </div>
          <div className="project-about">
            <div className="header subheader project-header">{name}</div>
            <ul>
              {tech.map((t) => {
                return <li>{t}</li>;
              })}
            </ul>
            <p className="project-text">{about}</p>
            <div className="project-links">
              {!github ? null : (
                <div className="git">
                  <i
                    className="fab fa-github-square proj-icon"
                    onClick={() => window.open(github, "_blank")}
                    onMouseEnter={() => showLink(`git-${name}-${number}`)}
                    onMouseLeave={() => hideLink(`git-${name}-${number}`)}
                  />
                  <span className="git-link" id={`git-${name}-${number}`}>
                    github
                  </span>
                </div>
              )}
              {!url ? null : (
                <div className="git">
                  <i
                    className="fas fa-external-link-square-alt proj-icon"
                    onClick={() => window.open(url, "_blank")}
                    onMouseEnter={() => showLink(`web-${name}-${number}`)}
                    onMouseLeave={() => hideLink(`web-${name}-${number}`)}
                  />
                  <span className="web-link" id={`web-${name}-${number}`}>
                    visit
                  </span>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            className="project-about no-img"
            style={{ position: "relative", top: "15%" }}
          >
            <div className="header subheader project-header">{name}</div>
            <ul>
              {tech.map((t) => {
                return <li>{t}</li>;
              })}
            </ul>
            <p className="project-text" style={{ width: "70vw" }}>
              {about}
            </p>
            <div className="project-links">
              {!github ? null : (
                <div className="git">
                  <i
                    className="fab fa-github-square proj-icon"
                    onClick={() => window.open(github, "_blank")}
                    onMouseEnter={showLink}
                    onMouseLeave={hideLink}
                  />
                  <span className="git-link">github</span>
                </div>
              )}
              {!url ? null : (
                <div className="git">
                  <i
                    className="fas fa-external-link-square-alt proj-icon"
                    onClick={() => window.open(url, "_blank")}
                    onMouseEnter={() => showLink("web-link")}
                    onMouseLeave={() => hideLink("web-link")}
                  />
                  <span className="web-link">visit</span>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Project;

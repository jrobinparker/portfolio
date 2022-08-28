import React, { Fragment, useEffect } from "react";
import ModalButton from "./ModalButton";
import gsap from "gsap";
import { createPortal } from "react-dom";
import { Power1 } from "gsap";

const ProjectModal = ({
  proj: { name, languages, tech, about, github, img, url, number, type },
  closeModal,
}) => {
  useEffect(() => {
    const header = document.getElementById("about-header");
    const title = document.querySelector(".project-bar-title");
    const abtTextCt = document.querySelector(".modal");
    const abtText = document.querySelector(".modal-content");
    const tl = gsap.timeline();

    gsap.set(header, { opacity: 0, y: 50 });
    gsap.set(title, { opacity: 0 });
    gsap.set(abtTextCt, {
      height: "0vh",
      width: "0vh",
      visibility: "hidden",
      opacity: 0,
    });
    gsap.set(abtText, { opacity: 0 });

    if (window.matchMedia("(orientation: portrait)").matches) {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, {
          duration: 0.5,
          ease: Power1.easeIn,
          visibility: "visible",
          opacity: 1,
          height: "90vh",
          width: "95vw",
        })
        .to(title, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 });
    } else {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, {
          duration: 0.5,
          ease: Power1.easeIn,
          visibility: "visible",
          opacity: 1,
          height: "90vh",
          width: "60vw",
        })
        .to(title, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 });
    }
  }, []);

  return createPortal(
    <div className="project-modal">
      <div className="about-box modal" id={`${name}`}>
        <div className="about-bar project-bar">
          <span className="project-bar-title">{name}</span>
          <i
            class="fas fa-times"
            onClick={(e) => {
              closeModal(e);
            }}
          />
        </div>
        <div className="modal-content">
          {img ? (
            <div className="modal-img">
              <img src={`${img}`} alt="project" />
            </div>
          ) : (
            <Fragment></Fragment>
          )}
          <div className="about-info">
            <p>{about}</p>
            <div className="modal-buttons">
              {!github ? null : (
                <ModalButton text={"view github"} link={github} />
              )}
              {!url ? null : <ModalButton text={"view site"} link={url} />}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#project-modal")
  );
};

export default ProjectModal;

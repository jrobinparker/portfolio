import React, { useEffect } from "react";
import ProjectBox from "./ProjectBox";
import Header from "../Header";
import gsap from "gsap";
import projectData from "../../data/projects.json";

const Projects = ({ history }) => {
  const openAnimation = () => {
    const header = document.getElementById("projects-header");
    const projects = document.querySelectorAll(".project-box");
    const project1 = document.querySelectorAll(".project-box")[0];
    const project2 = document.querySelectorAll(".project-box")[1];
    const project3 = document.querySelectorAll(".project-box")[2];
    const project4 = document.querySelectorAll(".project-box")[3];
    const project5 = document.querySelectorAll(".project-box")[4];
    const project6 = document.querySelectorAll(".project-box")[5];
    const project7 = document.querySelectorAll(".project-box")[6];
    const project8 = document.querySelectorAll(".project-box")[7];

    const displayProjects = gsap.timeline();

    gsap.set(header, { y: 50 });
    gsap.set(projects, { y: 50 });

    displayProjects
      .to(header, 0.25, { delay: 0.25, opacity: 1, y: 0 })
      .to(project1, 0.25, { opacity: 1, y: 0 })
      .to(project2, 0.25, { opacity: 1, y: 0 })
      .to(project3, 0.25, { opacity: 1, y: 0 })
      .to(project4, 0.25, { opacity: 1, y: 0 })
      .to(project5, 0.25, { opacity: 1, y: 0 })
      .to(project6, 0.25, { opacity: 1, y: 0 })
      .to(project7, 0.25, { opacity: 1, y: 0 })
      .to(project8, 0.25, { opacity: 1, y: 0 });
  };

  useEffect(() => {
    openAnimation();
  }, []);

  const closeAnimation = async () => {
    const header = document.getElementById("projects-header");
    const projects = document.querySelector(".projects-grid");
    const removeProjects = gsap.timeline();

    await removeProjects
      .to(projects, 0.2, { opacity: 0, y: 50 })
      .to(header, 0.2, { opacity: 0, y: 50 });
  };

  const close = async () => {
    await closeAnimation();
    history.push("/");
  };

  return (
    <div id="projects">
      <Header headerId={"projects-header"} headerText={"Projects"} />
      <div className="projects-grid">
        {projectData.map((proj, i) => (
          <ProjectBox proj={proj} close={close} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

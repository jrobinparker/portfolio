import React, { useState, useEffect } from "react";
import Header from "../Header";
import Skill from "./Skill";
import gsap from "gsap";

const Skills = ({ history }) => {
  const [languages] = useState(["JavaScript", "Typescript", "Python", "Ruby"]);
  const [frontEnd] = useState([
    "Ember",
    "React | Redux",
    "Tailwind",
    "Three.js",
  ]);
  const [backEnd] = useState([
    "Node.js | Express",
    "Django | Flask",
    "Ruby on Rails",
    "Firebase",
  ]);
  const [dataScience] = useState(["Pandas", "Bokeh", "NLTK", "Data Cleansing"]);
  const [computerScience] = useState([
    "Data structures",
    "Object-oriented design",
    "Algorithms",
    "Complexity analysis",
  ]);
  const [other] = useState([
    "Agile",
    "SharePoint",
    "Video & Audio Editing",
    "Japanese (JLPT N2)",
  ]);

  const openAnimation = () => {
    const header = document.getElementById("skills-header");
    const skills = document.querySelectorAll(".skills-box");
    const skill1 = document.querySelectorAll(".skills-box")[0];
    const skill2 = document.querySelectorAll(".skills-box")[1];
    const skill3 = document.querySelectorAll(".skills-box")[2];
    const skill4 = document.querySelectorAll(".skills-box")[3];
    const skill5 = document.querySelectorAll(".skills-box")[4];
    const skill6 = document.querySelectorAll(".skills-box")[5];

    const tl = gsap.timeline();

    gsap.set(header, { y: 50 });
    gsap.set(skills, { y: 50 });

    tl.to(header, 0.25, { delay: 0.25, opacity: 1, y: 0 })
      .to(skill1, 0.25, { opacity: 1, y: 0 })
      .to(skill2, 0.25, { opacity: 1, y: 0 })
      .to(skill3, 0.25, { opacity: 1, y: 0 })
      .to(skill4, 0.25, { opacity: 1, y: 0 })
      .to(skill5, 0.25, { opacity: 1, y: 0 })
      .to(skill6, 0.25, { opacity: 1, y: 0 });
  };

  const closeAnimation = async () => {
    const header = document.getElementById("skills-header");
    const skills = document.querySelectorAll(".skills-box");
    const tl = gsap.timeline();

    await tl
      .to(skills, 0.25, { opacity: 0, y: 50 })
      .to(header, 0.25, { opacity: 0, y: 50 });
  };

  const close = async () => {
    await closeAnimation();
    history.push("/");
  };

  useEffect(() => {
    openAnimation();
  }, []);

  return (
    <div id="skills">
      <div id="skills-content">
        <Header headerId="skills-header" headerText={"Skills"} />
        <div className="skills-grid">
          <Skill skillName={"Languages"} skills={languages} close={close} />
          <Skill skillName={"Front End"} skills={frontEnd} close={close} />
          <Skill skillName={"Back End"} skills={backEnd} close={close} />
        </div>
        <div className="skills-grid">
          <Skill
            skillName={"Data Science"}
            skills={dataScience}
            close={close}
          />
          <Skill
            skillName={"Computer Science"}
            skills={computerScience}
            close={close}
          />
          <Skill skillName={"Other"} skills={other} close={close} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

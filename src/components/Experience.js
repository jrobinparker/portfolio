import React, { useEffect, useState } from "react";
import Header from "./Header";
import gsap from "gsap";
import { Power1 } from "gsap";
import AboutInfo from "./About/AboutInfo";

const Experience = ({ history }) => {
  const [currentInfo] = useState([
    "Agrian",
    "Software Developer",
    "6/2021 - present",
  ]);
  const [experience] = useState([
    {
      company: "Analysis Group",
      location: "Los Angeles, CA",
      title: "Software Developer",
      length: "10/2019 - 6/2021",
    },
    {
      company: "Analysis Group",
      location: "Los Angeles, CA",
      title: "Senior L&D Tech Specialist",
      length: "10/2011 - 6/2021",
    },
    {
      company: "Smith Patent Office",
      location: "Washington, DC",
      title: "Japanese Patent Consultant",
      length: "3/2011 - 3/2013",
    },
    {
      company: "Numazu/Yokohama BOE",
      location: "Numazu/Yokohama, Japan",
      title: "ESL Instructor",
      length: "4/2008 - 1/2010",
    },
  ]);

  useEffect(() => {
    const header = document.getElementById("about-header");
    const bar = document.querySelectorAll(".about-bar-title")[0];
    const close = document.querySelectorAll(".fas")[0];
    const otherBar = document.querySelectorAll(".about-bar-title")[1];
    const otherBarClose = document.querySelectorAll(".fas")[1];
    const abtImg = document.querySelector(".about-img");
    const abtTextCt = document.querySelector(".about-box");
    const abtText = document.querySelector(".about-text");
    const otherCont = document.querySelector(".other-box");
    const otherText = document.querySelectorAll(".other-box .about-text");

    const tl = gsap.timeline();

    gsap.set(header, { y: 50 });

    if (window.matchMedia("(orientation: landscape)").matches) {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, 0.25, {
          delay: 0.1,
          ease: Power1.easeIn,
          opacity: 1,
          height: "70vh",
          width: "80vw",
        })
        .to(bar, 0.25, { opacity: 1 })
        .to(close, 0.1, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 })
        .to(abtImg, 0.25, { opacity: 1 })
        .to(otherCont, 0.25, {
          ease: Power1.easeIn,
          opacity: 1,
          height: "70vh",
          width: "20vw",
        })
        .to(otherBar, 0.25, { opacity: 1 })
        .to(otherBarClose, 0.1, { opacity: 1 })
        .to(otherText, 0.25, { opacity: 1 });
    }

    if (window.matchMedia("(orientation: portrait)").matches) {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, 0.25, {
          delay: 0.1,
          ease: Power1.easeIn,
          opacity: 1,
          height: "60vh",
          width: "90vw",
        })
        .to(bar, 0.25, { opacity: 1 })
        .to(close, 0.1, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 })
        .to(abtImg, 0.25, { opacity: 1 })
        .to(otherCont, 0.25, {
          ease: Power1.easeIn,
          opacity: 1,
          height: "15vh",
          width: "90vw",
        })
        .to(otherBar, 0.25, { opacity: 1 })
        .to(otherBarClose, 0.1, { opacity: 1 })
        .to(otherText, 0.25, { opacity: 1 });
    }
  }, []);

  useEffect(() => {
    const otherCont = document.querySelector(".other-box");
    const abtTextCt = document.querySelector(".about-box");

    window.addEventListener("resize", () => {
      if (window.matchMedia("(orientation: landscape)").matches) {
        gsap.to(abtTextCt, 0.25, {
          delay: 0.1,
          ease: Power1.easeIn,
          opacity: 1,
          height: "70vh",
          width: "80vw",
        });
        gsap.to(otherCont, 0.25, {
          ease: Power1.easeIn,
          opacity: 1,
          height: "70vh",
          width: "20vw",
        });
      }

      if (window.matchMedia("(orientation: portrait)").matches) {
        gsap.to(abtTextCt, 0.25, {
          delay: 0.1,
          ease: Power1.easeIn,
          opacity: 1,
          height: "60vh",
          width: "90vw",
        });
        gsap.to(otherCont, 0.25, {
          ease: Power1.easeIn,
          opacity: 1,
          height: "15vh",
          width: "90vw",
        });
      }
    });
  });

  const closeAnimation = async () => {
    const header = document.getElementById("about-header");
    const abtImg = document.querySelector(".about-img");
    const abtTextCt = document.querySelector(".about-box");
    const abtText = document.querySelector(".about-text");
    const otherCont = document.querySelector(".other-box");
    const otherText = document.querySelectorAll(".other-box .about-text");

    const tl = gsap.timeline();

    await tl
      .to(otherText, 0.25, { opacity: 0 })
      .to(otherCont, 0.25, {
        ease: Power1.easeIn,
        opacity: 0,
        height: "0vh",
        width: "0vw",
      })
      .to(abtText, 0.25, { opacity: 0 })
      .to(abtImg, 0.25, { opacity: 0 })
      .to(abtTextCt, 0.25, {
        ease: Power1.easeIn,
        opacity: 0,
        height: "0vh",
        width: "0vw",
      })
      .to(header, 0.25, { opacity: 0, y: 50 });
  };

  const close = async () => {
    await closeAnimation();
    history.push("/");
  };

  return (
    <div id="exp">
      <Header headerId={"about-header"} headerText={"Experience"} />
      <div id="exp-content">
        <div className="about-box">
          <div className="about-bar">
            <span className="about-bar-title">Experience</span>
            <i
              class="fas fa-times"
              style={{ marginLeft: "auto" }}
              onClick={() => close()}
            />
          </div>
          <div className="about-content">
            <div className="about-img">
              <div className="about-info">
                {currentInfo.map((abt, i) => (
                  <AboutInfo itemType={"text"} itemText={abt} number={i} />
                ))}
              </div>
            </div>
            <div className="about-text exp-text">
              <span>
                Collaborate closely with the design, product, and back-end teams
                to develop new front-end features for one of the largest
                agriculture software platforms in the world.
              </span>
              <span>
                Developed a custom agricultural product dashboard, record
                sharing dashboard, various compliance verification components,
                and a historical weather component that derives historical
                forecasts from the geographic centroid of multiple plots of
                land.
              </span>
              <span>
                Troubleshoot and fix bugs in all next-gen and legacy front-end
                apps, including high-priority hotfixes.
              </span>
              <span>
                In charge of managerial and administrative duties for the team,
                from daily standups, sprint planning, and releases to scheduling
                and timesheet approvals.
              </span>
            </div>
          </div>
        </div>

        <div className="about-box other-box">
          <div className="about-bar other-bar">
            <span className="about-bar-title">Other Experience</span>
            <i
              class="fas fa-times"
              style={{ marginLeft: "auto" }}
              onClick={() => close()}
            />
          </div>
          <div className="about-content">
            <div className="about-text">
              {experience.map((exp) => {
                return (
                  <div className="other-exp-text">
                    <div>{exp.company}</div>
                    <div>{exp.location}</div>
                    <div>{exp.title}</div>
                    <div>{exp.length}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

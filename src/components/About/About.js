import React, { useState, useEffect } from "react";
import AboutInfo from "./AboutInfo";
import Header from "../../components/Header";
import gsap from "gsap";
import { Power1 } from "gsap";

const About = ({ history }) => {
  const [aboutInfo] = useState([
    {
      type: "text",
      text: "Name: Jeremy Parker",
    },
    {
      type: "text",
      text: "Location: Irvine, CA",
    },
    {
      type: "link",
      text: "View Github",
      url: "https://github.com/jrobinparker",
    },
    {
      type: "link",
      text: "View LinkedIn",
      url: "https://www.linkedin.com/in/jrobinparker/",
    },
    {
      type: "link",
      text: "Email Me",
      url: "mailto:jrobinparker@gmail.com",
    },
  ]);

  useEffect(() => {
    const header = document.getElementById("about-header");
    const abtImg = document.querySelector(".about-img");
    const abtTextCt = document.querySelector(".about-box");
    const abtText = document.querySelector(".about-text");
    const bar = document.querySelector(".about-bar-title");
    const tl = gsap.timeline();

    gsap.set(header, { y: 50 });

    if (window.matchMedia("(orientation: portrait)").matches) {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, 0.5, {
          opacity: 1,
          ease: Power1.easeIn,
          height: "85vh",
          width: "90vw",
        })
        .to(bar, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 })
        .to(abtImg, 0.25, { opacity: 1 });
    } else {
      tl.to(header, 0.5, { opacity: 1, y: 0 })
        .to(abtTextCt, 0.5, {
          opacity: 1,
          ease: Power1.easeIn,
          height: "60vh",
          width: "80vw",
        })
        .to(bar, { opacity: 1 })
        .to(abtText, 0.25, { opacity: 1 })
        .to(abtImg, 0.25, { opacity: 1 });
    }
  }, []);

  useEffect(() => {
    const abtTextCt = document.querySelector(".about-box");

    window.addEventListener("resize", () => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        gsap.to(abtTextCt, 0.5, {
          opacity: 1,
          ease: Power1.easeIn,
          height: "85vh",
          width: "90vw",
        });
      } else {
        gsap.to(abtTextCt, 0.5, {
          opacity: 1,
          ease: Power1.easeIn,
          height: "60vh",
          width: "80vw",
        });
      }
    });
  });

  const closeAnimation = async () => {
    const header = document.getElementById("about-header");
    const abtTextCt = document.querySelector(".about-box");
    const abtText = document.querySelector(".about-content");
    const tl = gsap.timeline();

    await tl
      .to(abtText, 0.2, { opacity: 0 })
      .to(abtTextCt, {
        delay: 0.25,
        duration: 0.5,
        ease: Power1.easeIn,
        opacity: 0,
        height: "0vh",
        width: "0vw",
      })
      .to(header, 0.5, { opacity: 0, y: 50 });
  };

  const close = async () => {
    await closeAnimation();
    history.push("/");
  };

  return (
    <div id="about">
      <Header headerId={"about-header"} headerText={"About Me"} />
      <div className="about-box">
        <div className="about-bar">
          <span className="about-bar-title">About Me</span>
          <i class="fas fa-times" onClick={() => close()} />
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src="/images/portrait.JPG" alt="headshot" />
            <div className="about-info">
              {aboutInfo.map((abt, i) => (
                <AboutInfo
                  itemType={abt.type}
                  itemText={abt.text}
                  itemLink={abt.url}
                  number={i}
                />
              ))}
            </div>
          </div>
          <div className="about-text">
            <span>
              I'm a highly positive and outgoing JavaScript developer
              who builds data-driven user interfaces for one of the largest
              agricultural software platforms in the world.
            </span>
            <span>
              I started my journey in web development during my days as a
              corporate trainer and LMS admin. One day, I thought I'd try my
              hand at improving one of our less than exciting corporate training
              courses. I found that with a bit of custom HTML, CSS, and
              JavaScript, I was able to drastically improve the quality of the
              course. From there, I was hooked.
            </span>
            <span>
              While at Analysis Group, I developed automated solutions in Python
              to improve case staffing initiatives, saving turn-around times by
              over 50%. I've also built React apps to connect to our LMS's API
              and a data dashboard with a Python backend and React front-end
              that provided actionable insights into app usage, reducing the
              following year's cost by 25%.
            </span>
            <span>
              During the depths of the COVID-19 pandemic, I built a a full-stack
              app for a martial arts school in New Jersey to allow students to
              connect with the dojo sensei and watch online training content
              during lockdowns.
            </span>
            <span>
              Outside of developing, I love surfing, running, hiking, Japanese
              TV shows, and spending time with my wife and 2 kiddos.
            </span>
            <span>"Without people, you're nothing." - Joe Strummer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

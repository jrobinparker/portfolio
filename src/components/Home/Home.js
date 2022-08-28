import React, { Fragment, useEffect } from "react";
import gsap from "gsap";
import HomeLink from "./HomeLink";
import { ReactComponent as Line } from "../../assets/header-line.svg";

const Home = () => {
  useEffect(() => {
    const home = document.getElementById("home-content");
    const header = document.getElementById("home-header");
    const line = document.querySelectorAll(".svg-line");
    const links = document.querySelector(".items");

    const tl = gsap.timeline();

    gsap.set(header, { y: 50 });
    gsap.set(line, { scaleX: 0 });
    gsap.set(links, { opacity: 0 });
    tl.to(home, 0.5, { opacity: 1 })
      .to(header, 0.5, { opacity: 1, y: 0 })
      .to(links, 0.1, { opacity: 1 })
      .to(line, 0.2, { delay: 0.5, opacity: 1, scaleX: 1.5 });
  }, []);

  return (
    <Fragment>
      <div id="home">
        <div id="home-content">
          <div className="home-header-container">
            <div className="header" id="home-header">
              Jeremy Parker
            </div>
            <Line />
          </div>
          <div className="items">
            <HomeLink link="about-me" text="about me" number="0" />
            <HomeLink link="skills" text="skills" number="1" />
            <HomeLink link="experience" text="experience" number="2" />
            <HomeLink link="projects" text="projects" number="3" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

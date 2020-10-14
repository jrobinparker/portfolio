import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import HomeLink from './HomeLink';
import {ReactComponent as Line} from '../assets/untitled.svg';

const Home = () => {

  useEffect(() => {
      const home = document.getElementById('home-content')
      const header = document.getElementById('home-header')
      const line = document.querySelectorAll('.svg-line')
      const links = document.querySelector('.items')

      const tl = gsap.timeline()

      gsap.set(home, { opacity: 0 })
      gsap.set(header, { opacity: 0, y: 50 })
      gsap.set(line, { opacity: 0, scaleX: 0 })
      gsap.set(links, { opacity: 0 })
      tl.to(home, .5, {opacity: 1 })
        .to(header, .5, { opacity: 1, y: 0})
        .to(links, .1, {opacity: 1})
        .to(line, .2, { delay: .5, opacity: 1, scaleX: 1.5 })

  }, [])

    return (
      <Fragment>
      <div id="home">
        <div id="home-content">
          <div className="home-header-container">
            <div className="header" id="home-header">Jeremy Parker</div>
            <Line />
          </div>
          <div className="items">
            <HomeLink link='about-me' text='about me' number='0' />
            <HomeLink link='skills' text='skills' number='1' />
            <HomeLink link='experience' text='experience' number='2' />
            <HomeLink link='projects' text='projects' number='3' />
          </div>
        </div>
      </div>
      </Fragment>
    )
}

export default Home;

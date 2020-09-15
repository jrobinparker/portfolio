import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import HomeLink from './HomeLink';

const Home = () => {

  useEffect(() => {
      const home = document.getElementById('home-content')
      const header = document.getElementById('home-header')
      gsap.set(header, {opacity: 0, y: 50})
      gsap.to(header, {opacity: 1})
      gsap.to(header, {duration: .5, opacity: 1, y: 0})
  }, [])

    return (
      <div id="home">
        <div id="home-content">
          <div className="header" id="home-header">Jeremy Parker</div>
          <div className="items">
            <HomeLink link='about-me' text='about me' number='0'/>
            <HomeLink link='skills' text='skills' number='1'/>
            <HomeLink link='experience' text='experience' number='2'/>
            <HomeLink link='projects' text='projects' number='3'/>
          </div>
        </div>
      </div>
    )
}

export default Home;

import React from 'react';
import { ReactComponent as Seascape } from './Seascape.svg';
import { TweenMax, TimelineMax } from "gsap/TweenMax";
import * as ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


class Sea extends React.Component {
  componentDidMount() {
    const tlScroll1 = new TimelineMax();

    tlScroll1
      .set('#sun', {y: 1500})
      .to('#sun', 3, {y: 0})

    const controller = new ScrollMagic.Controller();

    //Scene 1
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '.trigger',
      duration:  '100%'
    })
    .setTween(tlScroll1)
    .setPin()
    .addTo(controller)


    TweenMax.to('#wave1', 3, {
      scaleY: 1.25,
      scaleX: 1.05,
      y: 10,
      x: 1,
      repeat: -1,
      yoyo: true
    })

    TweenMax.to('#wave2', 3, {
      scaleY: 1.25,
      scaleX: 1.05,
      y: 10,
      x: 2,
      repeat: -1,
      yoyo: true
    })

    TweenMax.to('.leaf', 2, {
      rotation: 10,
      x: 4,
      repeat: -1,
      yoyo: true
    })
  }

  toggleMode() {
    const sea = document.getElementById('waves')
    const hometext = document.getElementById('home-text')
    const toggle = document.getElementById('toggle')
    const toggleMoon = document.getElementById('toggle-moon')
    const toggleSun = document.getElementById('toggle-sun')
    const toggleName = document.getElementById('name')
    if (sea.classList.contains('day')) {
      sea.classList.remove('day')
      hometext.classList.remove('border-gradient-day')
      toggle.classList.remove('toggle-day')
      toggleName.classList.remove('name-day')
      sea.classList.add('night')
      toggle.classList.add('toggle-night')
      toggleSun.classList.remove('not-active')
      toggleMoon.classList.add('not-active')
      hometext.classList.add('border-gradient-night')
      toggleName.classList.add('name-night')

      const tlNight = new TimelineMax();

      tlNight
        .set('.day' && '.clouds', {opacity: 0})
        .set('#sun', {opacity: 0})
        .to('.night' && '#moon', 1, {opacity: 1})

    } else if (sea.classList.contains('night')) {
      sea.classList.remove('night')
      hometext.classList.remove('border-gradient-night')
      toggle.classList.remove('toggle-night')
      toggleName.classList.remove('name-night')
      sea.classList.add('day')
      toggle.classList.add('toggle-day')
      toggleMoon.classList.remove('not-active')
      toggleSun.classList.add('not-active')
      hometext.classList.add('border-gradient-day')
      toggleName.classList.add('name-day')
      const tlDay = new TimelineMax();

      tlDay
        .set('.night' && '#moon', {opacity: 0})
        .set('#sun', {opacity: 1})
        .to('#sun' && '.clouds', 1, {opacity: 1})
    }
    }
  render() {
  return(
    <div id="waves" className="day trigger">
      <div onClick={this.toggleMode} className="toggle toggle-day shadow" id="toggle">
        <i className="fas fa-moon" id="toggle-moon"/> | <i className="fas fa-sun not-active" id="toggle-sun" />
      </div>
      <Seascape />
    </div>
  )
}}

export default Sea

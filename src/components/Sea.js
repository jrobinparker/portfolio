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
      .set('#sun', {y: 2000})
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
    document.querySelector('.sea').classList.toggle('night')
    document.querySelector('.home-text').classList.toggle('border-gradient-night')
    document.querySelector('.toggle').classList.toggle('toggle-night')
    document.querySelector('.fa-moon').classList.toggle('not-active')
    document.querySelector('.fa-sun').classList.toggle('not-active')
    document.querySelector('.name').classList.toggle('name-night')
    document.querySelector('#line1').classList.toggle('line-night')
    document.querySelector('#line2').classList.toggle('line-night')
    document.querySelector('#line3').classList.toggle('line-night')
    document.querySelector('.nav-bg').classList.toggle('nav-bg-night')


    if (document.querySelector('.sea').classList.contains('night')) {
      const tlNight = new TimelineMax();

      tlNight
        .set('.clouds', {opacity: 0})
        .set('#sun', {opacity: 0})
        .to('.night' && '#moon', 1, {opacity: 1})

    } else {
      const tlDay = new TimelineMax();

      tlDay
        .set('.night' && '#moon', {opacity: 0})
        .set('#sun', {opacity: 1})
        .to('.clouds', 1, {opacity: 1})

    }
  }
  render() {
  return(
    <div id="waves" className="sea trigger">
      <div onClick={this.toggleMode} className="toggle" id="toggle">
        <i className="fas fa-moon" id="toggle-moon"/> | <i className="fas fa-sun not-active" id="toggle-sun" />
      </div>
      <Seascape />
    </div>
  )
}}

export default Sea

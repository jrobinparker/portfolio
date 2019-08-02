import React from 'react';
import { ReactComponent as Waves } from './Waves.svg';
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
      x: 1,
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
  render() {
  return(
    <div id="waves" className="trigger">
      <Waves />
    </div>
  )
}}

export default Sea

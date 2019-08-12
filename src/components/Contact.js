import React from 'react';
import { ReactComponent as Diver } from '../assets/diving.svg';
import VisibilitySensor from 'react-visibility-sensor';
import { TweenMax, TimelineMax, Power0 } from "gsap/TweenMax";

class Contact extends React.Component {
  state = {
    visible: false
  }

  render() {


    if (this.state.visible) {
      const contact = document.querySelector('.contact')
      contact.style.opacity = 1;
      contact.classList.add('fadein')

      const path = {
        curviness: 1,
        autoRotate: false,
        values: [
          {x: 100, y: -20},
          {x: 300, y: 10},
          {x: 500, y: 20},
          {x: 300, y: 10},
          {x: 100, y: -20},
          {x: 100, y: -20},
          {x: 300, y: 10},
          {x: -100, y: 20},
          {x: 100, y: -20},
          {x: 100, y: -20},
          {x: 300, y: 10},
          {x: -100, y: 20},
          {x: 100, y: -20}
        ]
      }

      const tlFlippers = new TimelineMax();

      tlFlippers.add(
        TweenMax.to('#left-foot', .75, {
          y: -30,
          x: 30,
          rotation: 70,
          repeat: -1,
          yoyo: true
        }))
      .add(
        TweenMax.to('#right-foot', .75, {
          y: -20,
          x: 10,
          rotation: 50,
          repeat: -1,
          yoyo: true
        }))

      const tlBubbles = new TimelineMax();

      tlBubbles.add(
        TweenMax.to('#bubble1', .5, {
          y: -100,
          x: -10,
          opacity: 0,
          repeat: -1
        }))
        .add(
          TweenMax.to('#bubble2', .6, {
            y: -200,
            opacity: 0,
            delay: 0,
            repeat: -1
          }))
          .add(
            TweenMax.to('#bubble3', .7, {
              y: -100,
              opacity: 0,
              delay: 0,
              repeat: -1
            }))

      TweenMax.to('#diver', 50, {
          bezier: path,
          ease: Power0.easeInOut,
          repeat: -1,
        })

      TweenMax.to('.contact-header', 2, {
        y: -400
      })
    }

  return (
    <VisibilitySensor
      onChange={isVisible => {
        this.setState({
          visible: isVisible
        })
      }}>
      <div className="contact">
        <Diver />
        <div className="contact-header shadow">
            <h2>contact me at:</h2>
            <h1><a href="mailto:jrobinparker@gmail.com">jrobinparker@gmail.com</a></h1>
        </div>
      </div>
    </VisibilitySensor>
  )
}
}

export default Contact

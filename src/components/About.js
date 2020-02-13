import React from 'react';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin)

class About extends React.Component {

  componentDidMount() {
    const header = document.querySelector('.header')
    const abtImg = document.querySelector('.about-img')
    const abtTextCt = document.querySelector('.about-text-container')
    const abtText = document.querySelector('.about-text')
    const rule = CSSRulePlugin.getRule(".about-text-container:after")
    const tl = gsap.timeline()

    gsap.set(abtImg, {visibility: 'hidden', opacity: 0})
    gsap.set(abtTextCt, {height: '0vh', width: '0vh'})
    gsap.set(rule, {cssRule: {opacity: 0}})

    tl.to(abtTextCt, {duration: .5, ease: Power1.easeIn, height: '38vh', width: '60vw' })
      .to(rule, .1, {cssRule: {opacity: 1}})
      .to(abtText, .1, { opacity: 1 })
      .to(abtImg, .25, { visibility: 'visible', opacity: 1 })

  }

  render() {
    return (
      <div id="about">
          <div className="header">about me</div>
          <div className="about-content">
            <div className="about-text-container">
              <div className="about-text">Lorem ipsum dolor amet portland pabst +1 seitan fashion axe hella subway tile viral green juice tacos flexitarian direct trade plaid cornhole roof party. Lyft single-origin coffee jianbing brunch, poke etsy retro intelligentsia. Direct trade quinoa migas before they sold out post-ironic. Four loko street art pinterest portland echo park occupy gluten-free beard plaid. Waistcoat lyft etsy letterpress cold-pressed fashion axe church-key celiac. Banh mi irony shoreditch keytar health goth cornhole. Jean shorts fashion axe occupy snackwave tofu meditation next level.</div>
            </div>
            <div className="about-img">
              <img src={require('../assets/photo.jpeg')} />
              <div className="about-links">
                <i className="fab fa-github-square" onClick={() => window.open('https://github.com/jrobinparker/', '_blank')}/>
                <i className="fab fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/jrobinparker/', '_blank')}/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About

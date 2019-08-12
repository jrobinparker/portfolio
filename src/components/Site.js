import React from 'react';
import SiteImages from './SiteImages';
import VisibilitySensor from 'react-visibility-sensor';
import { TweenMax } from "gsap/TweenMax";

class Site extends React.Component {
  state = {
    visible: false
  }

  render() {

    if (this.props.site.title === 'renshu' && this.state.visible) {
      TweenMax.to(`#${this.props.site.title}-img`, 1, {opacity: 1, x: 100})
      TweenMax.to(`#${this.props.site.title}-box`, 1, {opacity: 1, x: -100})
    }

    if (this.props.site.title === 'jchain' && this.state.visible) {
      TweenMax.to(`#${this.props.site.title}-img`, 1, {opacity: 1, x: 100})
      TweenMax.to(`#${this.props.site.title}-box`, 1, {opacity: 1, x: -100})
    }

    if (this.props.site.title === 'jdictsearch' && this.state.visible) {
      TweenMax.to(`#${this.props.site.title}-img`, 1, {opacity: 1, x: -100})
      TweenMax.to(`#${this.props.site.title}-box`, 1, {opacity: 1, x: 100})
    }


  return(
    <VisibilitySensor
      PartiallyVisible
      onChange={isVisible => {
        this.setState({
          visible: isVisible
        })
      }}>
    <div className="site-container" id="site-container">
      <div className="site-images-container" id={`${this.props.site.title}-img`}>
        <img src={require(`../assets/${this.props.site.image}`)} />
      </div>
      <div className="site-box" id={`${this.props.site.title}-box`}>
        <div className="site-title">{this.props.site.title}</div>
        <div className="site-icons">
          <a href={this.props.site.github} target="_blank">
            <i className="fab fa-github site-icon" />
          </a>
          <a href={this.props.site.url} target="_blank" style={{ marginLeft: '10px' }}>
            <i className="fas fa-external-link-square-alt site-icon" />
          </a>
        </div>
          <ul className="site-info">
            <div className="site-info-header">
              <li>{this.props.site.about}</li>
              {this.props.site.highlights.map(hl => {
                return <div style={{ display: 'inline-block'}}>{hl}</div>
              })}
            </div>
              {this.props.site.tech.map(t => {
                return <li>{t}</li>
              })}
          </ul>
      </div>
    </div>
    </VisibilitySensor>
  )
}
}

export default Site

import React from 'react';
import Site from './Site';

class Sites extends React.Component {
  state = {
    sites: [
      {
        id: "1",
        title: "renshu",
        github: "https://github.com/jrobinparker/renshu",
        url: "https://guarded-escarpment-15012.herokuapp.com/",
        about: "a community-driven japanese learning app",
        highlights: ["tailored content in dashboard", "lesson & course wizard", "flash cards"],
        tech: ["mongo DB", "node | express", "bcrypt | passport | jwt authentication", "react", "react router", "redux", "vanilla js", "semantic ui"],
        image: "renshu-gif.gif"
      },
      {
        id: "2",
        title: "jdictsearch",
        github: "https://github.com/jrobinparker/jdictsearch",
        url: "https://jrobinparker.github.io/jdictsearch/",
        about: "searches 3 english-japanese dictionaries",
        highlights: ["client-side scraper using cheerio"],
        tech: ["cheerio", "react", "axios", "vanilla js", "material ui"],
        image: "jdict-gif.gif"
      },
      {
        id: "3",
        title: "jchain",
        about: "homepage for a (fictional) blockchain app",
        github: "https://github.com/jrobinparker/jchain",
        url: "https://jrobinparker.github.io/jchain/",
        highlights: ["client-side scraper using cheerio"],
        tech: ["react", "vanilla js", "css flexbox"],
        image: "jchain-gif.gif"
      }
    ]
  }

  render() {

  return (
    <div className="sites">
        <span className="sites-header-text">
          sites
        </span>
      {this.state.sites.map(site => {
        return <Site site={site} />
      })}
    </div>
    )
  }
}

export default Sites

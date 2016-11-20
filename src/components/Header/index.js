// import React from "react"
import React, { PropTypes } from "react"
// import { Link } from "react-router"
// import Svg from "react-svg-inline"

// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import JSONTree from "react-json-tree"

import Navigation from "../Navigation"

import styles from "./index.css"

const Header = (props, context) => (
  <header className={ styles.header }>
    <JSONTree data={ context } />
    <Navigation { ...props } />
    {/* <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to="/"
        >
          { "Home" }
        </Link>
        <Link
          className={ styles.link }
          to="/"
        >
          { "Tech" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav> */}
  </header>
)

// Header.propTypes = {
//   navigationItems: PropTypes.array.isRequired,
// }

Header.contextTypes = {
  location: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default Header

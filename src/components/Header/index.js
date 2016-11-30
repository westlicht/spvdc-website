// import React from "react"
import React, { PropTypes } from "react"
// import { Link } from "react-router"
// import Svg from "react-svg-inline"

// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

// import JSONTree from "react-json-tree"

import enhanceCollection from "phenomic/lib/enhance-collection"
import currentPageId from "../../utils/currentPageId"

// import Navigation from "../Navigation"
import NavigationMenu from "../NavigationMenu"

// import styles from "./index.css"

const Header = (props, context) => {

  // collect translation items
  const id = currentPageId(context)
  const translationItems = enhanceCollection(context.collection, {
    filter: { id: id },
    sorted: "locale",
  }).map(item => ({
    name: item.locale.toUpperCase(),
    url: item.__url,
  }))

  // collect navigation items
  const navigationItems = {
    en: require("../../../content/en/navigation.yml"),
    de: require("../../../content/de/navigation.yml"),
    fr: require("../../../content/fr/navigation.yml"),
  }[context.locale].map(item => ({
    name: item.name,
    url: item.url,
  }))


  return (
  <div id="header">
    <div id="logo">
      <span id="logo-text">swiss-PVD Coating AG</span>
      <div id="nav-dropdown" onClick={
        (e) => {
          document.querySelector("#nav-top").classList.toggle("hidden")
        }
      }/>
      <NavigationMenu id="nav-language" items={ translationItems } />
    </div>
    <NavigationMenu id="nav-top" items={ navigationItems } />
    <div id="separator"/>
    {/* <JSONTree data={ context } shouldExpandNode={ (keyName, data, level) => { return level < 1 } } /> */}
  </div>
  )
}

Header.toggleNavigation = function(e) {
  alert("toggle");
}

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

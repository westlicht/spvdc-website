// import React from "react"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "phenomic"
import Markdown from "react-markdownit"
import cookie from "react-cookie"

import { localeFromURL } from "../../intl"

import enhanceCollection from "phenomic/lib/enhance-collection"
import currentPageId from "../../utils/currentPageId"

import NavigationMenu from "../NavigationMenu"

import ContactData from "../../data/ContactData"

const Header = (props, context) => {

  // collect translation items
  const id = currentPageId(context)
  var translationItems = enhanceCollection(context.collection, {
    filter: { id: id },
  }).map(item => ({
    locale: localeFromURL(item.__url),
    name: localeFromURL(item.__url).toUpperCase(),
    url: item.__url,
  }))
  // sort by order specified in package.json
  translationItems.sort((a, b) => {
    a = context.metadata.pkg.locales.indexOf(a.locale)
    b = context.metadata.pkg.locales.indexOf(b.locale)
    return a < b ? -1 : 1;
  })

  // collect navigation items
  const navigationItems = {
    de: require("../../../content/de/navigation.yml").header,
    fr: require("../../../content/fr/navigation.yml").header,
    en: require("../../../content/en/navigation.yml").header,
  }[context.locale]

  return (
  <div id="header">
    <div className="container">
      <div className="wrapper">
        <div className="address">
          <Markdown options={{ html: true }}>
            { ContactData.address(context.locale).join("<br/>") }
          </Markdown>
        </div>
        <div className="contact">
          <p>
            { ContactData.data.contact.phone }<br/>
            { ContactData.data.contact.email }<br/>
            { ContactData.data.contact.www }<br/>
            { ContactData.data.contact.mwst}<br/>
          </p>
        </div>
        <div className="logo">
          <Link to={ "/" + context.locale }>
            <img src="/assets/img/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="spacer" />
        <button
          id="nav-icon"
          type="button"
          onClick={ Header.toggleDropdown }
        >
          <span className="bar"></span>
        </button>
        <div id="nav">
          <div className="container">
            <NavigationMenu id="nav-main" items={ navigationItems } onClick={ Header.hideDropdown } />
            <NavigationMenu id="nav-language" items={ translationItems } onClick={ Header.onClickLanguage } />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Header.onClickLanguage = function(item, e) {
  // TODO this should be done in redux
  cookie.save("locale", item.locale, { path: "/", maxAge: 365*24*60*60 })
  Header.hideDropdown(e)
}

Header.toggleDropdown = function(e) {
  (e)
  document.querySelector("#nav").classList.toggle("visible")
  document.querySelector("#nav-icon").classList.toggle("visible")
}

Header.hideDropdown = function(e) {
  (e)
  document.querySelector("#nav").classList.remove("visible")
  document.querySelector("#nav-icon").classList.remove("visible")
}

Header.contextTypes = {
  location: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default Header

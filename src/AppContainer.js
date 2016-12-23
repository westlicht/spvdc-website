// polyfills
import "intl"
import "intl/locale-data/jsonp/de.js"
import "intl/locale-data/jsonp/fr.js"
import "intl/locale-data/jsonp/en.js"

import React, { PropTypes } from "react"
import { addLocaleData, IntlProvider } from "react-intl"
import flatten from "flat"

import "font-awesome/css/font-awesome.css"

import "./css/site.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Footer from "./components/Footer"


// Standard locales
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...de, ...en, ...fr])

// Application messages
const messages = {
  de: flatten(require("../content/de/translations.yml")),
  fr: flatten(require("../content/fr/translations.yml")),
  en: flatten(require("../content/en/translations.yml")),
}

class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    location: PropTypes.object,
    locale: PropTypes.string,
    test: PropTypes.string,
  }

  getLocale() {
    let locale = this.props.location.pathname.replace(/^\//, "").split("/")[0]
    if (!["de", "fr", "en"].includes(locale)) {
      locale = "de"
    }
    return locale
  }

  getChildContext() {
    return {
        location: this.props.location,
        locale: this.getLocale(),
    }
  }

  componentDidMount() {
    // Flexibility
    if (typeof window !== "undefined") {
      const flexibility = require("flexibility/flexibility.js")
      flexibility(document.documentElement)
    }
  }

  render() {
    const locale = this.getLocale()
    return (
      <IntlProvider locale={ locale } messages={ messages[locale] }>
        <Container>
          <DefaultHeadMeta />
          <Header { ...this.props } />
          { this.props.children }
          <Footer />
        </Container>
      </IntlProvider>
    )

  }
}

export default AppContainer

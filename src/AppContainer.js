// polyfills
import "intl"
import "intl/locale-data/jsonp/de.js"
import "intl/locale-data/jsonp/fr.js"
import "intl/locale-data/jsonp/en.js"

import React from "react"
import PropTypes from "prop-types"
import { addLocaleData, IntlProvider } from "react-intl"
import flatten from "flat"

import DefaultHeadMeta from "./components/DefaultHeadMeta"
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"

import "font-awesome/css/font-awesome.css"

import "./css/site.global.css"

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
    params: PropTypes.object,
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

  render() {
    // old browser check
    if (typeof window !== "undefined") {
      const outdatedBrowserRework = require("outdated-browser-rework")
      outdatedBrowserRework({
          browserSupport: {
              'Chrome': 37,
              'IE': 10,
              'Safari': 7,
              'Mobile Safari': 7,
              'Firefox': 28
          }
      })
    }

    const locale = this.getLocale()
    return (
      <GoogleAnalyticsTracker params={ this.props.params }>
        <IntlProvider locale={ locale } messages={ messages[locale] }>
          <div>
            <div id="outdated"></div>
            <DefaultHeadMeta />
            { this.props.children }
          </div>
        </IntlProvider>
      </GoogleAnalyticsTracker>
    )
  }
}

export default AppContainer

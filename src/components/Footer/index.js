import React, { PropTypes } from "react"
import { Icon } from "react-fa"
import { FormattedMessage } from "react-intl"

import transformMarkdown from "../../transform-markdown"
import RawHtml from "react-raw-html"

import translatedString from "../../utils/translatedString.js"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"
import GoogleMap from "../GoogleMap"
import NavigationMenu from "../NavigationMenu"

import ContactData from "../../data/ContactData"

const Footer = (props, context) => {

  // collect navigation items
  const navigationItems = {
    de: require("../../../content/de/navigation.yml").footer,
    fr: require("../../../content/fr/navigation.yml").footer,
    en: require("../../../content/en/navigation.yml").footer,
  }[context.locale]

  return (
    <footer id="footer">
      <div className="container">
        <div className="infos">
          <div className="address">
            <h1>
              <FormattedMessage id="footer.address" defaultMessage="Address" />
            </h1>
            <p>
              {
                ContactData.address(context.locale).reduce((r, line) =>
                  r.concat(
                    (<span>{line}</span>),
                    (<br/>)
                  )
                , [])
              }
            </p>
          </div>
          <div className="contact">
            <h1>
              <FormattedMessage id="footer.contact" defaultMessage="Contact" />
            </h1>
            <p>
              <Icon name="phone" fixedWidth={ true } />
              <PhoneNumber address={ ContactData.data.contact.phone } />
              <br/>
              <Icon name="envelope-o" fixedWidth={ true } />
              <EmailAddress address={ ContactData.data.contact.email } />
              <br/>
              <Icon name="globe" fixedWidth={ true } />
              <a href={ "http://" + ContactData.data.contact.www }>{ ContactData.data.contact.www }</a>
              <br/>
            </p>
          </div>
          <div className="hours">
            <h1>
              <FormattedMessage id="footer.hours" defaultMessage="Hours" />
            </h1>
            <RawHtml.p>{ transformMarkdown(translatedString(ContactData.data.hours, context.locale)) }</RawHtml.p>
          </div>
        </div>
      </div>
      <GoogleMap
        className="map"
        url={ "http://maps.google.ch?q=" + ContactData.shortAddress(context.locale) }
        lat={ ContactData.data.map.lat }
        lng={ ContactData.data.map.lng }
        zoom={ ContactData.data.map.zoom }
      />
      <div className="container">
        <NavigationMenu id="nav-footer" items={ navigationItems } />
      </div>
    </footer>
  )
}

Footer.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default Footer

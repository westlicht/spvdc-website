import React, { PropTypes } from "react"
import { Icon } from "react-fa"
import { FormattedMessage } from "react-intl"

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
  }[context.locale].map(item => ({
    name: item.name,
    url: item.url,
  }))

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
                ContactData.address(context.locale).map((line, id) => (
                  <span key={ id } className="line">
                    {line}
                  </span>
                ))
              }
            </p>
          </div>
          <div className="contact">
            <h1>
              <FormattedMessage id="footer.contact" defaultMessage="Contact" />
            </h1>
            <p>
              <span className="line">
                <Icon name="phone" fixedWidth={ true } />
                <PhoneNumber address={ ContactData.data.contact.phone } />
              </span>
              <span className="line">
                <Icon name="envelope-o" fixedWidth={ true } />
                <EmailAddress address={ ContactData.data.contact.email } />
              </span>
              <span className="line">
                <Icon name="globe" fixedWidth={ true } />
                <a href={ "http://" + ContactData.data.contact.www }>{ ContactData.data.contact.www }</a>
              </span>
            </p>
          </div>
          <div className="hours">
            <h1>
              <FormattedMessage id="footer.hours" defaultMessage="Hours" />
            </h1>
            <table><tbody>
              {
                ContactData.hours(context.locale).map((line, id) => (
                  <tr key={ id }>
                    {
                      line.map((item, id) => (
                        <td key={ id }>
                          { item }
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody></table>
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

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
    <div id="footer">
      <div className="container">
        <section>
          {/* <div className="row"> */}
            <div className="col">
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
            <div className="col">
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
            <div className="col">
              <h1>
                <FormattedMessage id="footer.times" defaultMessage="Times" />
              </h1>
              <p>
                {
                  ContactData.times(context.locale).map((line, id) => (
                    <span key={ id } className="line">
                      {line}
                    </span>
                  ))
                }
              </p>
            </div>
        </section>
      </div>
      <GoogleMap className="map"/>
      <div className="container2">
        <NavigationMenu id="nav-footer" items={ navigationItems } />
      </div>
    </div>
  )
}

Footer.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default Footer

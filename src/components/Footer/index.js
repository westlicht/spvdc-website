import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"
import GoogleMap from "../GoogleMap"

import ContactData from "../../data/ContactData"

const Footer = (props, context) => {
  return (
    <div id="footer">
      <div className="container">
        <section>
          <div className="row">
            <div className="col">
              <h1>Adresse</h1>
              <p>
                {ContactData.address(context.locale).map(function(line) {
                  return (
                    <span>
                      {line}
                      <br/>
                    </span>
                  )
                })}
              </p>
            </div>
            <div className="col">
              <h1>Kontakt</h1>
              <p>
                <span>
                  <Icon name="phone" fixedWidth={ true } />
                  <PhoneNumber address={ ContactData.data.contact.tel } />
                </span><br/>
                <span>
                  <Icon name="fax" fixedWidth={ true } />
                  <PhoneNumber address={ ContactData.data.contact.fax } link={ false } />
                </span><br/>
                <span>
                  <Icon name="envelope-o" fixedWidth={ true } />
                  <EmailAddress address={ ContactData.data.contact.email } />
                </span><br/>
                <span>
                  <Icon name="globe" fixedWidth={ true } />
                  <a href={ "http://" + ContactData.data.contact.www }>{ ContactData.data.contact.www }</a>
                </span><br/>
              </p>
            </div>
            <div className="col">
              <h1>Opening Hours</h1>
            </div>
            <div className="col">
              <GoogleMap className="map"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

Footer.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default Footer

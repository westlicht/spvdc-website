import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"

const contact = require("../../../content/contact/data.yml")

const Footer = (props, context) => {

  return (
    <div id="footer">
      <div className="container">
        <section>
          <div className="row">
            <div className="col">
              <h1>Adresse</h1>
              <p>
                {contact.address[context.locale].split("\n").map(function(line) {
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
                  <PhoneNumber address={ contact.tel } />
                </span><br/>
                <span>
                  <Icon name="fax" fixedWidth={ true } />
                  <PhoneNumber address={ contact.fax } link={ false } />
                </span><br/>
                <span>
                  <Icon name="envelope-o" fixedWidth={ true } />
                  <EmailAddress address={ contact.email } />
                </span><br/>
                <span>
                  <Icon name="globe" fixedWidth={ true } />
                  <a href={ "http://" + contact.www }>{ contact.www }</a>
                </span><br/>
              </p>
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

import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"

const Footer = (props, context) => {

  const data = {
    de: require("../../../content/de/footer.yml"),
    fr: require("../../../content/fr/footer.yml"),
    en: require("../../../content/en/footer.yml"),
  }[context.locale]

  return (
    <div id="footer">
      <div className="container">
        <section>
          <div className="row">
            <div className="col">
              <h1>Adresse</h1>
              <p>
                {data.address.split("\n").map(function(line) {
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
                  <PhoneNumber address={ data.contact.tel } />
                </span><br/>
                <span>
                  <Icon name="fax" fixedWidth={ true } />
                  <PhoneNumber address={ data.contact.fax } link={ false } />
                </span><br/>
                <span>
                  <Icon name="envelope-o" fixedWidth={ true } />
                  <EmailAddress address={ data.contact.email } />
                </span><br/>
                <span>
                  <Icon name="globe" fixedWidth={ true } />
                  <a href={ "http://" + data.contact.www }>{ data.contact.www }</a>
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

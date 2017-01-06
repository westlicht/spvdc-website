import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"

import styles from "./index.css"

const PersonItem = ( { person }) => {
  let {
    image,
    name,
    title,
    phone,
    email,
    vcard,
  } = person

  return (
    <div className={ styles.container }>
      <div className={ styles.portrait } style={{ backgroundImage: "url(" + image + ")" }} />
      <div className={ styles.details }>
        <span className={ styles.name }>{ name }</span>
        <span className={ styles.title }>{ title }</span>
        { phone && (
          <span className={ styles.phone }>
            <Icon name="phone" fixedWidth={ true }/>
            <PhoneNumber address={ phone } />
          </span>
        )
        }
        { email && (
          <span className={ styles.email }>
            <Icon name="envelope-o" fixedWidth={ true }/>
            <EmailAddress address={ email } />
          </span>
        )}
        { vcard && (
          <span className={ styles.vcard }>
            <Icon name="vcard-o" fixedWidth={ true }/>
            <a href={ vcard }>vCard</a>
          </span>
        )}
      </div>
    </div>
  )
}

PersonItem.propTypes = {
  person: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string,
    vcard: PropTypes.string,
  }),
}

export default PersonItem

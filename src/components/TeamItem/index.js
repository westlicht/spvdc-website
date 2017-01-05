import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"

import styles from "./index.css"

const TeamItem = ({ member }) => {
  return (
    <div className={ styles.item }>
      <div className={ styles.portrait } style={{ backgroundImage: "url(" + member.image + ")" }} />
      <div className={ styles.details }>
        <span className={ styles.name }>{ member.name }</span>
        <span className={ styles.title }>{ member.title }</span>
        { member.phone && (
          <span className={ styles.phone }>
            <Icon name="phone" fixedWidth={ true }/>
            <PhoneNumber address={ member.phone } />
          </span>
        )
        }
        { member.email && (
          <span className={ styles.email }>
            <Icon name="envelope-o" fixedWidth={ true }/>
            <EmailAddress address={ member.email } />
          </span>
        )}
        { member.vcard && (
          <span className={ styles.vcard }>
            <Icon name="vcard-o" fixedWidth={ true }/>
            <a href={ member.vcard }>vCard</a>
          </span>
        )}
      </div>
    </div>
  )
}

TeamItem.propTypes = {
  member: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string,
    vcard: PropTypes.string,
  }),
}

export default TeamItem

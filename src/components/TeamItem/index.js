import React, { PropTypes } from "react"
import { Link } from "phenomic"
import { Icon } from "react-fa"

import PhoneNumber from "../PhoneNumber"
import EmailAddress from "../EmailAddress"

import styles from "./index.css"

const TeamItem = ({ member }) => {
  const url = member.image || "/assets/img/team/placeholder.jpg"
  return (
    <div className={ styles.item }>
      <div className={ styles.portrait } style={{ backgroundImage: "url(" + url + ")" }} />
      <div className={ styles.details }>
        <span className={ styles.name }>{ member.name }</span>
        <span className={ styles.title }>{ member.title }</span>
        { member.tel && (
          <span className={ styles.tel }>
            <Icon name="phone" fixedWidth={ true }/>
            <PhoneNumber address={ member.tel } />
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
            <a href={ member.vcard }>vcard</a>
          </span>
        )}
      </div>
    </div>
  )
}

TeamItem.propTypes = {
  member: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tel: PropTypes.string,
    email: PropTypes.string,
    vcard: PropTypes.string,
  }),
}

export default TeamItem

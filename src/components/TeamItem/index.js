import React, { PropTypes } from "react"
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
        <span className={ styles.short }>{ member.short }</span>
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
        {(
          <span className={ styles.email }>
            {/* <Link> */}
              <Icon name="vcard-o" fixedWidth={ true }/>
            {/* </Link> */}
          </span>
        )}
      </div>
    </div>
  )
}

TeamItem.propTypes = {
  member: PropTypes.object.isRequired,
}

export default TeamItem

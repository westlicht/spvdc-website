import React, { PropTypes } from "react"

import MailTo from "../MailTo"

import styles from "./index.css"

const TeamItem = ({ member }) => {
  const url = member.image || "/assets/img/team/placeholder.jpg"
  return (
    <div className={ styles.item }>
      <div className={ styles.portrait } style={{ backgroundImage: "url(" + url + ")" }} />
      <div className={ styles.details }>
        <span className={ styles.name }>{ member.name }</span>
        <span className={ styles.short }>{ member.short }</span>
        { member.tel ? ( <span className={ styles.tel }>Tel: { member.tel }</span> ) : null }
        { member.email ? ( <span className={ styles.email }>Mail: <MailTo email={ member.email } /></span> ) : null }
      </div>
    </div>
  )
}

TeamItem.propTypes = {
  member: PropTypes.object.isRequired,
}

export default TeamItem

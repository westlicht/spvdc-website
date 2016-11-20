import React, { PropTypes } from "react"

import MailTo from "../MailTo"

import styles from "./index.css"

const MemberDetail = ({ member }) => {
  return (
    <div>
      <img className={ styles.portrait } src={ member.image || "/assets/person.png" } />
      <p><strong>{ member.name }</strong></p>
      <p>{ member.short }</p>
      { member.tel ? ( <p>Tel: { member.tel }</p> ) : null }
      { member.email ? ( <p>Mail: <MailTo email={ member.email } /></p> ) : null }
    </div>
  )
}

MemberDetail.propTypes = {
  member: PropTypes.object.isRequired,
}

export default MemberDetail

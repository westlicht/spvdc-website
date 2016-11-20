import React, { PropTypes } from "react"

const MailTo = ({ email }) => {
  return (
    <a href={ "mailto:" + email }>{ email }</a>
  )
}

MailTo.propTypes = {
  email: PropTypes.string.isRequired,
}

export default MailTo

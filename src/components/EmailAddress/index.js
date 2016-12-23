import React, { PropTypes } from "react"

const EmailAddress = ({ address }) => {
  return (
    <a href={ "mailto:" + address }>{ address }</a>
  )
}

EmailAddress.propTypes = {
  address: PropTypes.string.isRequired,
}

export default EmailAddress

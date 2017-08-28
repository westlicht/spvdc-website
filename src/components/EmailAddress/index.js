import React from "react"
import PropTypes from "prop-types"

const EmailAddress = ({ address }) => {
  return (
    <a href={ "mailto:" + address }>{ address }</a>
  )
}

EmailAddress.propTypes = {
  address: PropTypes.string.isRequired,
}

export default EmailAddress

import React from "react"
import PropTypes from "prop-types"

const PhoneNumber = ({ address, link = true }) => {
  const m = address.match(/(\+41)\s(\d{2})\s(\d{3})\s(\d{2})\s(\d{2})/)
  if (m != null) {
    const raw = address.replace(/\s/g, "")
    const text = m[1] + " (0) " + m[2] + " " + m[3] + " " + m[4] + " " + m[5]
    return link ? (
      <a href={ "tel:" + raw }>{ text }</a>
    ) : (
      <span>{ text }</span>
    )
  } else {
    return (
      <span><em style={ { color: "red" } }>{ address } has invalid format, use +41 XX XXX XX XX</em></span>
    )
  }
}

PhoneNumber.propTypes = {
  address: PropTypes.string.isRequired,
  link: PropTypes.bool,
}

export default PhoneNumber

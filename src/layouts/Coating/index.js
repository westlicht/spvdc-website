import React, { PropTypes } from "react"

import PlainPage from "../PlainPage"

const Contact = (props) => {
  props = {
    ...props,
    locale: "de",
  }
  return (
    <PlainPage { ...props }>
      <h1>{ props.head.title }</h1>
    </PlainPage>
  )
}

Contact.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Contact

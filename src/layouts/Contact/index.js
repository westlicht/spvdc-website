import React, { PropTypes } from "react"

import PlainPage from "../PlainPage"
import GoogleMap from "../../components/GoogleMap"

const Contact = (props) => {
  return (
    <PlainPage { ...props }>
      <section className="wrapper-content">
        <GoogleMap/>
      </section>
    </PlainPage>
  )
}

Contact.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Contact

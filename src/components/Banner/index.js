import React, { PropTypes } from "react"

const Banner = ({ image, children }) => {
  return (
    <section
      id="banner"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      { children }
    </section>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Banner

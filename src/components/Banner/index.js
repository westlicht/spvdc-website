import React, { PropTypes } from "react"

const Banner = ({ image, children }) => {
  return (
    <div
      id="banner"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      { children }
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Banner

import React, { PropTypes } from "react"

import styles from "./index.css"

const Banner = ({ image }) => {
  return (
    <div
      className={ styles.banner }
      style={{ backgroundImage: "url(" + image + ")" }}
    >
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Banner

import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

const Section = ({ children }) => {
  return (
    <section
      className={ styles.section }
    >
      { children }
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

export default Section

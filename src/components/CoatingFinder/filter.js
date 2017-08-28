import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

const Filter = (props) => (
  <div className={ styles.filter }>
    <div className={ styles.container }>
      <span className={ styles.title }>{ props.title }</span>
      { props.children }
    </div>
  </div>
)

Filter.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Filter

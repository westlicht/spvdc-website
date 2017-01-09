import React, { PropTypes } from "react"

import styles from "./index.css"

const Filter = (props) => (
  <div className={ styles.filter }>
    <span className={ styles.title }>{ props.title }</span>
    { props.children }
  </div>
)

Filter.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Filter

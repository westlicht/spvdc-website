import React, { PropTypes } from "react"

import styles from "./index.css"

const TwoColumns = ({ children }) => (
  <div className={ styles.container }>
    { children }
  </div>
)

TwoColumns.propTypes = {
  children: PropTypes.node,
}

const LeftColumn = ({ children }) => (
  <div className={ styles.left }>
    { children }
  </div>
)

LeftColumn.propTypes = {
  children: PropTypes.node,
}

const RightColumn = ({ children }) => (
  <div className={ styles.right }>
    { children }
  </div>
)

RightColumn.propTypes = {
  children: PropTypes.node,
}

export { TwoColumns, LeftColumn, RightColumn }

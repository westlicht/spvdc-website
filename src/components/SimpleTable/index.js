import React, { PropTypes } from "react"

import styles from "./index.css"

const SimpleTableRow = ({ title, value }) => (
  <div className={ styles.row }>
    <span className={ styles.title }>{ title }</span>
    <span className={ styles.value }>{ value }</span>
  </div>
)

SimpleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const SimpleTable = ({ rows }) => {
  return (
    <div className={ styles.table }>
      {
        rows.map(row => (
          <SimpleTableRow title={ row.title } value={ row.value } />
        ))
      }
    </div>
  )
}

SimpleTable.propTypes = {
  rows: PropTypes.array.isRequired,
}

export default SimpleTable

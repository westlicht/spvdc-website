import React, { PropTypes } from "react"

import styles from "./index.css"

const SimpleTableRow = ({ title, value }) => (
  <div className={ styles.row }>
    <span className={ styles.title }>{ title }</span>
    <span className={ styles.value }>{ value }</span>
  </div>
)

SimpleTableRow.propTypes = {
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
}

const SimpleTable = ({ rows }) => {
  return (
    <div className={ styles.table }>
      {
        rows.map((row, id) => (
          <SimpleTableRow key={ id } title={ row.title } value={ row.value } />
        ))
      }
    </div>
  )
}

SimpleTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
  }))
}

export default SimpleTable

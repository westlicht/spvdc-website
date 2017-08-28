import React from "react"
import PropTypes from "prop-types"

import CoatingItem from "./item.js"

import styles from "./index.css"

const maxItemsPerRow = 3

const CoatingList = ({ coatings }) => {
  return (
    <ul className={ styles.list }>
      {
        coatings.map((coating) => (
          <li className={ styles.item } key={ coating.url }>
            <CoatingItem coating={ coating } />
          </li>
        ))
      }
      {
        // fill up with placeholders
        [...Array(maxItemsPerRow)].map((dummy, index) => (
          <li className={ styles.item } key={ index }></li>
        ))
      }
    </ul>
  )
}

CoatingList.propTypes = {
  coatings: PropTypes.arrayOf(CoatingItem.propTypes.coating),
}

export default CoatingList

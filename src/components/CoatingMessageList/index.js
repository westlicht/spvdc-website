import React from "react"
import PropTypes from "prop-types"

import CoatingMessageItem from "./item.js"

import styles from "./index.css"

const CoatingMessageList = ({ messages }) => {
  return (
    <ul className={ styles.list }>
      {
        messages.map((message, index) => (
          <li className={ styles.item } key={ index }>
            <CoatingMessageItem message={ message } />
          </li>
        ))
      }
    </ul>
  )
}

CoatingMessageList.propTypes = {
  messages: PropTypes.arrayOf(CoatingMessageItem.propTypes.coating),
}

export default CoatingMessageList

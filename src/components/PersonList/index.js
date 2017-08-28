import React from "react"
import PropTypes from "prop-types"

import PersonItem from "./item.js"

import styles from "./index.css"

const PersonList = ({ persons }) => {
  return (
    <ul className={ styles.list }>
      {
        persons.map((person) => (
          <li className={ styles.item } key={ person.url }>
            <PersonItem person={ person } />
          </li>
        ))
      }
    </ul>
  )
}

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PersonItem.propTypes.person),
}

export default PersonList

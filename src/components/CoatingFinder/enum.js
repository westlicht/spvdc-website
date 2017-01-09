import React, { PropTypes } from "react"

import styles from "./index.css"

const Enum = ({ items, index, onChange }) => (
  <select
    className = { styles.enum }
    size={ 1 }
    value={ index }
    onChange={ e => onChange(Number(e.target.value)) }
  >
    <option value={ 0 }>{ "Bitte auswählen" }</option>
    {
      items.map(item => (
        <option key={ item.id } value={ item.id }>{ item.title }</option>
      ))
    }
  </select>
)

Enum.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
  index: PropTypes.number,
  onChange: PropTypes.func,
}

export default Enum

import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const CoatingItem = ( { coating }) => {
  let {
    url,
    image,
    name,
    state,
  } = coating


  const overlayStyles = [styles.overlay].concat({
    'default': [],
    'unavailable': [ styles.unavailable ],
    'available': [ styles.available ],
    'recommended': [ styles.recommended ],
  }[state]).join(" ")

  return (
    <Link className={ styles.container } to={ url }>
      <img className={ styles.image } src={ image } />
      <span className= { styles.title }>{ name }</span>
      <div className={ overlayStyles }>
      </div>
    </Link>
  )
}

CoatingItem.propTypes = {
  coating: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['default', 'unavailable', 'available', 'recommended']).isRequired,
  }),
}

export default CoatingItem

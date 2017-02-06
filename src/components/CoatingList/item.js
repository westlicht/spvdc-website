import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const CoatingItem = ( { coating }) => {
  let {
    url,
    image,
    name,
    state,
    // body,
  } = coating


  const overlayStyles = [styles.overlay].concat({
    'default': [],
    'unavailable': [ styles.unavailable ],
    'available': [ styles.available ],
    'recommended': [ styles.recommended ],
  }[state]).join(" ")

  return (
    <Link className={ styles.container } style={{ backgroundImage: "url(" + image + ")"}} to={ url }>
      <div className={ overlayStyles }>
        <span className= { styles.title }>{ name }</span>
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
    // body: PropTypes.string.isRequired,
  }),
}

export default CoatingItem

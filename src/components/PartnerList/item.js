import React, { PropTypes } from "react"

import styles from "./index.css"

const PartnerItem = ( { partner }) => {
  let {
    url,
    image,
    title,
    body,
  } = partner

  return (
    <a className={ styles.container } href={ url } target="_blank">
      <img className={ styles.image } src={ image } alt={ title }/>
      <p className={ styles.body }>
        { body }
      </p>
    </a>
  )
}

PartnerItem.propTypes = {
  partner: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}

export default PartnerItem

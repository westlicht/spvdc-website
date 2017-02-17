import React, { PropTypes } from "react"
import Markdown from "react-markdownit"

import styles from "./index.css"

const PartnerItem = ( { partner }) => {
  let {
    url,
    image,
    alt,
    body,
  } = partner

  return (
    <a className={ styles.container } href={ url } target="_blank">
      <img className={ styles.image } src={ image } alt={ alt }/>
      <Markdown className={ styles.body }>{ body }</Markdown>
    </a>
  )
}

PartnerItem.propTypes = {
  partner: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}

export default PartnerItem

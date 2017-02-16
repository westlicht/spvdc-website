import React, { PropTypes } from "react"
import Markdown from "react-markdownit"

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
      <Markdown className={ styles.body }>{ body }</Markdown>
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

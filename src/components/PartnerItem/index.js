import React, { PropTypes } from "react"

import styles from "./index.css"

const PartnerItem = ({ link, image, title, body }) => {
  return (
    <div className={ styles.item }>
      <a href={ link } target="_blank">
        <div className={ styles.container }>
          <img src={ image } alt={ title }/>
          {/* <h1>{ title }</h1> */}
          <p>{ body }</p>
        </div>
      </a>
    </div>
  )
}

PartnerItem.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PartnerItem

import React, { PropTypes } from "react"
import { Icon } from "react-fa"

import styles from "./index.css"

const ServiceItem = ({ icon, image, title, body }) => {
  return (
    <div className={ styles.item }>
      <div className={ styles.wrapper }>
        <div className={ styles.info }>
          <h2><Icon name={ icon } size="lg" />{ title }</h2>
          <p>{ body }</p>
        </div>
        <div
          className={ styles.image }
          style={{ backgroundImage: "url(" + image + ")" }}
        />
      </div>
      <div className={ styles.arrow } />
    </div>
  )
}

ServiceItem.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default ServiceItem

import React from "react"
import PropTypes from "prop-types"
import { Link } from "phenomic"
import { Icon } from "react-fa"

import styles from "./index.css"

const PageError = ({ error, errorText }) => {

  const homeUrl = process.env.PHENOMIC_USER_URL

  return (
    <div className={ styles.container }>
      <div className={ styles.icon }>
        <Icon name="exclamation-triangle" size="4x" />
      </div>
      <div className={ styles.text }>
        <p className={ styles.title }>
          <strong>{ error }</strong>
          { " " }
          { errorText }
        </p>
        <Link className={ styles.home } to={ homeUrl }>{ homeUrl }</Link>
      </div>
    </div>
  )
}

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError

import React, { PropTypes } from "react"
import { Link } from "phenomic"
import { Icon } from "react-fa"

import transformMarkdown from "../../transform-markdown"
import RawHtml from "react-raw-html"

import styles from "./index.css"

const CoatingMessageItem = ( { message }) => {
  let {
    body,
  } = message

  return (
    <div className={ styles.container }>
      <Icon className={ styles.icon } name="exclamation-circle" size="lg" />
      <RawHtml.p>{ transformMarkdown(body) }</RawHtml.p>
    </div>
  )
}

CoatingMessageItem.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }),
}

export default CoatingMessageItem

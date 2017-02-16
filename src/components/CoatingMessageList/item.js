import React, { PropTypes } from "react"
import { Icon } from "react-fa"
import Markdown from "react-markdownit"

import styles from "./index.css"

const CoatingMessageItem = ( { message }) => {
  let {
    body,
  } = message

  return (
    <div className={ styles.container }>
      <Icon className={ styles.icon } name="exclamation-circle" size="lg" />
      <Markdown>{ body }</Markdown>
    </div>
  )
}

CoatingMessageItem.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }),
}

export default CoatingMessageItem

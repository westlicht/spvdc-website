import React from "react"
import PropTypes from "prop-types"
import Markdown from "react-markdownit"

import { Icon } from "react-fa"

import styles from "./index.css"

const DownloadItem = ({ description, url }) => {
  const filename = url.split('/').pop()
  return (
    <div className={ styles.item }>
      <a className={ styles.link } href={ encodeURI(url) } target='_blank'>
        <Icon className={ styles.icon } name="download" size="lg" />
        { filename }
      </a>
      <Markdown className={ styles.description }>{ description }</Markdown>
    </div>
  )
}

DownloadItem.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default DownloadItem

import React, { PropTypes } from "react"
import Icon from "react-fa"
import Markdown from "react-markdownit"

import styles from "./index.css"

const DownloadItem = ( { download }) => {
  let {
    description,
    url,
  } = download

  const filename = url.split('/').pop()

  return (
    <div className={ styles.container }>
      <a href={ url } target="_blank">
        <Icon className={ styles.icon } name="download" />
        <span className={ styles.filename }>{ filename }</span>
      </a>
      <Markdown className={ styles.description }>{ description }</Markdown>
      {/* <span className={ styles.description }>{ description }</span> */}
    </div>
  )
}

DownloadItem.propTypes = {
  download: PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default DownloadItem

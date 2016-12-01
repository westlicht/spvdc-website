import React, { PropTypes } from "react"

import {Icon} from "react-fa"

import styles from "./index.css"

const DownloadItem = ({ description, url }) => {
  const filename = url.split('/').pop()
  return (
    <div className={ styles.item }>
      <a className={ styles.link } href={ url }>
        {/* <Icon className={ styles.icon } name="file-pdf-o" /> */}
        <Icon className={ styles.icon } name="download" size="lg" />
        { filename }
      </a>
      <span className={ styles.description }>{ description }</span>
    </div>
  )
}

DownloadItem.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default DownloadItem

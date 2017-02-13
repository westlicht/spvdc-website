import React, { PropTypes } from "react"

import DownloadItem from "./item.js"

import styles from "./index.css"

const DownloadList = ({ downloads }) => {
  return downloads ? (
    <ul className={ styles.list }>
      {
        downloads.map((download) => (
          <li className={ styles.item } key={ download.url }>
            <DownloadItem download={ download } />
          </li>
        ))
      }
    </ul>
  ) : null
}

DownloadList.propTypes = {
  downloads: PropTypes.arrayOf(DownloadItem.propTypes.download),
}

export default DownloadList

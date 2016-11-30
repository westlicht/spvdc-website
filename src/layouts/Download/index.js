import React, { PropTypes } from "react"

import DownloadItem from "../../components/DownloadItem"
import PlainPage from "../PlainPage"

const Download = (props) => {
  return (
    <PlainPage { ...props }>
    {
      props.head.downloads.map(item => (
        <DownloadItem description={ item.description } url={ item.url }/>
      ))
    }
    </PlainPage>
  )
}

Download.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Download

import React, { PropTypes } from "react"
import { FormattedDate } from "react-intl"

import Page from "../Page"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <header>
          {
            pageDate &&
            <FormattedDate
              value={new Date(pageDate)}
              year='numeric'
              month='long'
              day='2-digit'
            />
          }
          {/* {
            pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
          } */}
        </header>
      }
    />
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post

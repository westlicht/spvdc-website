import React, { PropTypes } from "react"
import { Link } from "phenomic"
import { FormattedDate } from "react-intl"

import styles from "./index.css"

const PostPreviewItem = ( { post }) => {
  let {
    url,
    title,
    date,
    body,
  } = post

  return (
    <Link className={ styles.container } to={ url }>
      <span className={ styles.title }>{ title }</span>
      <span className={ styles.date }>
        <FormattedDate
          value={new Date(date)}
          year='numeric'
          month='long'
          day='2-digit'
        />
      </span>
      { body && (
        <p className={ styles.body }>
          { body }
        </p>
      )}
    </Link>
  )
}

PostPreviewItem.propTypes = {
  post: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
}

export default PostPreviewItem

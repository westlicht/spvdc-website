import React, { PropTypes } from "react"
import { Link } from "react-router"
import { FormattedDate } from "react-intl"

import styles from "./index.css"

const PostPreview = ({ url, title, date, content }) => {
  const pageDate = date ? new Date(date) : null

  return (
      <Link className={ styles.container } to={ url }>
        <span className={ styles.title }>
          { title }
        </span>
        <span className={ styles.date }>
          { " " }
          <FormattedDate
            value={new Date(pageDate)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        </span>
        { content && (
          <p className={ styles.content }>
            { content }
          </p>
        )}
      </Link>
  )
}

PostPreview.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default PostPreview

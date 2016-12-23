import React, { PropTypes } from "react"
import { Link } from "react-router"
import { FormattedDate } from "react-intl"

// import styles from "./index.css"

const PostPreview = ({ __url, title, date }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      {
        pageDate &&
        <div>
          { " " }
          <FormattedDate
            value={new Date(pageDate)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        </div>
      }
      <Link to={ __url }>
        { title }
      </Link>
      {/* {
        pageDate &&
        <small>
          { " " }
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        </small>
      } */}
    </div>
  )
}

PostPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default PostPreview

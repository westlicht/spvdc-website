import React, { PropTypes } from "react"
import { Link } from "react-router"
import { FormattedDate } from "react-intl"

const PagePreview = ({ __url, title, date }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
      {
        pageDate &&
        <small>
          { " " }
          <FormattedDate
            value={new Date(pageDate)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        </small>
      }
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

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default PagePreview

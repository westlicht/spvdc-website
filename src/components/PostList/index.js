import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"

import PostPreview from "../PostPreview"

import styles from "./index.css"

const PostList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      // 0
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li className={ styles.item } key={ page.title }><PostPreview { ...page } /></li>
          ))
        }
        </ul>
      ) : (
        <FormattedMessage
            id="homepage.noPosts"
            defaultMessage="No posts yet."
        />
      )
    }
    </div>
  )
}

PostList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PostList

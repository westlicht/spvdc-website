import React, { PropTypes } from "react"

import PostPreviewItem from "./item.js"

import styles from "./index.css"

const PostPreviewList = ({ posts }) => {
  return (
    <ul className={ styles.list }>
      {
        posts.map((post) => (
          <li className={ styles.item } key={ post.url }>
            <PostPreviewItem post={ post } />
          </li>
        ))
      }
    </ul>
  )
}

PostPreviewList.propTypes = {
  posts: PropTypes.arrayOf(PostPreviewItem.propTypes.post),
}

export default PostPreviewList

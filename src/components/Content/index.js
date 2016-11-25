import React, { PropTypes } from "react"

// import styles from "./index.css"

const Content = (props) => (
  <div id="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content

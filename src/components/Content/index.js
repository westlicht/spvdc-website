import React, { PropTypes } from "react"

const Content = (props) => (
  <div id="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content

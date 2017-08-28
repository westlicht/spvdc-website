import React from "react"
import PropTypes from "prop-types"

const Content = (props) => (
  <div id="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content

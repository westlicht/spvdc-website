import React, { PropTypes } from "react"

// import styles from "./index.css"

const Container = (props) => (
  <div id="wrapper">
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container

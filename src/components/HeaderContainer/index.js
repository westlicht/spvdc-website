import React from "react"
import PropTypes from "prop-types"

const HeaderContainer = (props) => (
  <header>
    { props.head.title && !props.head.headline && (
      <h1 className="headline">{ props.head.title }</h1>
    )}
    { props.head.headline && (
      <h1 className="headline">{ props.head.headline }</h1>
    )}
    { props.head.subline && (
      <h2 className="subline">{ props.head.subline }</h2>
    )}
  </header>
)

HeaderContainer.propTypes = {
  head: PropTypes.object.isRequired,
}

export default HeaderContainer

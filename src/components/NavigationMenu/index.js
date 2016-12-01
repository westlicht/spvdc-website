import React, { PropTypes } from "react"
import { Link } from "react-router"

const NavigationMenu = (props) => {
  return (
    <nav id={ props.id }>
      {
        props.items.map((item) => (
          <Link
            to={ item.url.replace(/\/$/g, '') }
            key={ item.url }
            activeClassName="active"
            onClick={ props.onClick }
          >
            {item.name}
          </Link>
        ))
      }
    </nav>
  )
}

NavigationMenu.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}

export default NavigationMenu

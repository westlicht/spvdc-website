import React, { PropTypes } from "react"
import { Link } from "react-router"

const NavigationMenu = (props) => {
  return (
    <nav id={ props.id }>
      <ul>
        {
          props.items.map((item) => (
            <li key={ item.url }>
              <Link
                to={item.url}
                key={item.url}
                activeClassName="active"
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

NavigationMenu.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default NavigationMenu

import React, { PropTypes } from "react"
import { Link } from "phenomic"

const NavigationMenu = (props) => {
  return (
    <nav id={ props.id }>
      {
        props.items.map((item) => {
          let boundClick = props.onClick.bind(this, item)
          return (
            <Link
              key={ item.url }
              to={ item.url.replace(/\/$/g, '') }
              activeClassName="active"
              onClick={ boundClick }
            >
              { item.name }
            </Link>
          )
        })
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

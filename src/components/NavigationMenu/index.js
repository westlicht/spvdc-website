import React, { PropTypes } from "react"
import { Link } from "phenomic"
// import Link from "../Link"

const NavigationMenu = (props) => {
  return (
    <nav id={ props.id }>
      {
        props.items.map((item, itemIndex) => {
          let boundClick = props.onClick && props.onClick.bind(this, item)
          return item.external ? (
            <a
              key={ itemIndex }
              href={ encodeURI(item.url) }
            >
              { item.name }
            </a>
          ) : (
            <Link
              key={ itemIndex }
              to={ item.url }
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

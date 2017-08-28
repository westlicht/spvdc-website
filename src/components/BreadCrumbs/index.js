import React from "react"
import PropTypes from "prop-types"
import { Link } from "phenomic"

import enhanceCollection from "phenomic/lib/enhance-collection"

const BreadCrumbs = (props, context) => {
  const pathArray = explodePath(context.location.pathname, "/")

  const items = pathArray.map(function(item, id) {
    const url = "/" + pathArray.slice(0, id+1).join("/") + "/"
    const pages = enhanceCollection(context.collection, {
      filter: { __url: url },
    })
    const title = pages.length > 0 ? pages[0].title : "unknown"
    return {
      id: id,
      last: id == pathArray.length - 1,
      url: url,
      title: title,
    }
  })

  return (
    <div id="breadcrumbs">
      <div className="container">
        { items.map(item => {
          return item.last ? (
            <span key={ item.id }>{ item.title }</span>
          ) : (
            <span key={ item.id }><Link to={ item.url }>{ item.title }</Link></span>
          )
        })}
      </div>
    </div>
  )
}

BreadCrumbs.contextTypes = {
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default BreadCrumbs

const trimPath = (path, char = '/') => {
  const escapedString = char.replace(/[\[\](){}?*+\^$\\.|\-]/g, '\\$&')

  return path.replace(
    new RegExp(`^[ ${escapedString}]+|[ ${escapedString}]+$`, 'g'),
    ''
  )
}

const explodePath = (path, pathSeparator) => {
  const trimedPath = trimPath(path, pathSeparator)

  if (trimedPath === '') {
    return []
  }

  return trimedPath.split(pathSeparator)
}

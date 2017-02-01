import React from "react"
// import React, { PropTypes } from "react"
import { Table } from "reactable"

import CoatingData from "../../data/CoatingData"

const CoatingDatabase = () => {

  return (
    <div>
      <h1>Coatings</h1>

      {
        <Table data={ _.sortBy(Object.values(CoatingData.coatings), "id").map(coating => ({
          id: coating.id,
          title: coating.name,
        }))} />
      }

      <h1>Filters</h1>

      {
        Object.values(CoatingData.filters).map(filter => (
          <div>
            <h3>{ filter.title.de }</h3>
            <Table data={ filter.items.map(item => ({
              id: item.id,
              title: item.title.de,
              groups: item.groups,
              recommended: item.recommended,
              available: item.available,
            }))} />
          </div>
        ))
      }
    </div>
  )
}

// CoatingDatabase.contextTypes = {
//   metadata: PropTypes.object.isRequired,
// }

export default CoatingDatabase

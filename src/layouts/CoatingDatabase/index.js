import React from "react"
// import React, { PropTypes } from "react"
import { Table } from "reactable"

import Section from "../../components/Section"

import CoatingData from "../../data/CoatingData"

import styles from "./index.css"

const CoatingDatabase = () => {

  return (
    <Section>
      <h1>Coatings</h1>

      {
        <Table className={ styles.table } data={ CoatingData.coatingsSorted.map(coating => ({
          id: coating.id,
          title: coating.name,
        }))} />
      }

      <h1>Filters</h1>

      {
        CoatingData.filtersSorted.map(filter => (
          <div>
            <h3>{ filter.title.de }</h3>
            <Table className={ styles.table } data={ filter.items.map(item => ({
              id: item.id,
              title: item.title.de,
              groups: item.groups,
              recommended: item.recommended,
              available: item.available,
            }))} />
          </div>
        ))
      }
    </Section>
  )
}

// CoatingDatabase.contextTypes = {
//   metadata: PropTypes.object.isRequired,
// }

export default CoatingDatabase

import React from "react"
// import React, { PropTypes } from "react"
import { Table } from "reactable"

import CoatingData from "../../data/CoatingData"

const CoatingDatabase = () => {

  return (
    <div>
      <h1>Coating Database</h1>

      <h4>Applications</h4>
      <Table data={ CoatingData.db.get("applications").value().map(item => ({
        id: item.id,
        de: item.title.de,
        fr: item.title.fr,
        en: item.title.en,
        materials: item.materials ? item.materials : "all",
      })) } />

      <h4>Materials</h4>
      <Table data={ CoatingData.db.get("materials").value().map(item => ({
        id: item.id,
        de: item.title.de,
        fr: item.title.fr,
        en: item.title.en,
      })) } />

      <h4>Substrates</h4>
      <Table data={ CoatingData.db.get("substrates").value().map(item => ({
        id: item.id,
        de: item.title.de,
        fr: item.title.fr,
        en: item.title.en,
      })) } />
    </div>
  )
}

// CoatingDatabase.contextTypes = {
//   metadata: PropTypes.object.isRequired,
// }

export default CoatingDatabase

import React from "react"
import PropTypes from "prop-types"
import { Table } from "reactable"

import DocPageWrapper from "../DocPageWrapper"
import Section from "../../components/Section"
import BodyContainer from "../../components/BodyContainer"

import CoatingData from "../../data/CoatingData"

import styles from "./index.css"

const DocCoatingDatabase = (props) => {

  return (
    <DocPageWrapper { ...props }>
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>

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
    </DocPageWrapper>
  )
}

DocCoatingDatabase.propTypes = {
  body: PropTypes.string,
}

// DocCoatingDatabase.contextTypes = {
//   metadata: PropTypes.object.isRequired,
// }

export default DocCoatingDatabase

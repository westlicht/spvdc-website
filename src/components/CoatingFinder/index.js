import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { injectIntl, intlShape } from "react-intl"

import Enum from "./enum"
import Filter from "./filter"

import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import CoatingList from "../../components/CoatingList"

import CoatingData from "../../data/CoatingData"

import translatedString from "../../utils/translatedString"

const _ = require("lodash")

const CoatingFinder = (props, { collection, locale }) => {
  let {
    filterState,
    onChangeFilter,
    intl,
  } = props

  // check if filtering is active
  const filterActive = !_.isEqual(filterState, CoatingData.initialFilterState())

  // get recommended and available coatings
  const recommendedCoatings = CoatingData.recommendedCoatings(filterState)
  const availableCoatings = CoatingData.availableCoatings(filterState)

  // get collection of coating pages
  const coatingCollection = enhanceCollection(collection, {
    filter: { layout: "Coating", locale: locale },
  })

  // create a list of coatings for display
  const coatings = _.sortBy(coatingCollection.map(item => {
    const id = CoatingData.coatingIdByRef(item.id)
    const coating = CoatingData.coatings[item.id]
    return {
      name: item.title,
      order: coating.order,
      image: coating.images[0],
      url: item.__url,
      state: !filterActive ? 'default' : recommendedCoatings.includes(id) ? 'recommended' : availableCoatings.includes(id) ? 'available' : 'unavailable',
    }
  }), "order")

  return (
    <TwoColumns>
      <LeftColumn>
        {/* <p>groups: {JSON.stringify(CoatingData.availableGroups(filterState))}</p> */}
        <CoatingList coatings={ coatings } />
      </LeftColumn>
      <RightColumn>
        {
          CoatingData.filtersSorted.map((filter, filterIndex) => {
            const items = [
              // only show "please select" if no default value is set
              ...(filter.default === undefined ? [{
                id: 0,
                title: intl.formatMessage({ id: "coatings.finder.pleaseSelect" }),
              }] : []),
              // only show feasible filter options
              ...filter.items.map(item => ({
                id: item.id,
                title: translatedString(item.title, locale),
              })).filter(item => (CoatingData.isFilterItemFeasible(filterState, filter.id, item.id)))
            ]
            return (
              <Filter key={ filterIndex } title={ translatedString(filter.title, locale) }>
                <Enum
                  items={ items }
                  index={ filterState[filter.id] }
                  hidePleaseSelect={ filter.default != undefined }
                  onChange={ index => onChangeFilter(filter.id, index) }
                />
              </Filter>
            )
          })
        }
      </RightColumn>
    </TwoColumns>
  )
}

CoatingFinder.propTypes = {
  filterState: PropTypes.object, // TODO
  onChangeFilter: PropTypes.func,
  intl: intlShape.isRequired,
}

CoatingFinder.contextTypes = {
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default injectIntl(CoatingFinder)

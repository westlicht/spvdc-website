var _ = require('lodash')

import translatedString from "../../utils/translatedString.js"

class CoatingData {

  // returns the initial coating filter state
  // sets all filters to undefined (0)
  static initialFilterState() {
    let filterState = {}
    CoatingData.filtersSorted.forEach(filter => {
      filterState[filter.id] = filter.default ? filter.default : 0
    })
    return filterState
  }

  // updates the filter state based a newly selected filter item
  static updateFilterState(filterState, filterId, itemId) {
    filterState = Object.assign({}, filterState)
    filterState[filterId] = itemId
    return filterState
  }

  // returns a list of all coatings
  static allCoatings() {
    return CoatingData.coatingsSorted.map(coating => (
      coating.id
    ))
  }

  // returns a list coatings recommended with the given filter state
  static recommendedCoatings(filterState) {
    let coatings = CoatingData.allCoatings()
    CoatingData.filtersSorted.forEach(filter => {
      const item = _.find(filter.items, { id: filterState[filter.id] })
      if (item) {
        coatings = _.intersection(coatings, item.recommended)
      }
    })
    return coatings
  }

  // returns a list coatings available with the given filter state
  static availableCoatings(filterState) {
    let coatings = CoatingData.allCoatings()
    CoatingData.filtersSorted.forEach(filter => {
      const item = _.find(filter.items, { id: filterState[filter.id] })
      if (item) {
        coatings = _.intersection(coatings, _.union(item.available, item.recommended))
      }
    })
    return coatings
  }

  // returns a list of all groups
  static allGroups() {
    let groups = []
    CoatingData.filtersSorted.forEach(filter => {
      filter.items.forEach(item => {
        groups = _.union(groups, item.groups)
      })
    })
    return groups
  }

  // returns a list of groups available with the given filter state
  static availableGroups(filterState) {
    let groups = CoatingData.allGroups()
    CoatingData.filtersSorted.forEach(filter => {
      const item = _.find(filter.items, { id: filterState[filter.id] })
      if (item && item.groups.length > 0) {
        groups = _.intersection(groups, item.groups)
      }
    })
    return groups
  }

  // returns true if resulting filter yields a non empty set of coatings
  static isFilterItemFeasible(filterState, filterId, itemId) {
    filterState = CoatingData.updateFilterState(filterState, filterId, 0)
    const availableGroups = CoatingData.availableGroups(filterState)
    const item = _.find(CoatingData.filters[filterId].items, { id: itemId })
    if (item && item.groups.length > 0 && _.intersection(item.groups, availableGroups).length == 0) {
      return false
    }

    filterState = CoatingData.updateFilterState(filterState, filterId, itemId)
    return CoatingData.availableCoatings(filterState).length > 0
  }

  static coatingIdByRef(ref) {
    return CoatingData.coatings[ref].id
  }

  static activeMessages(filterState, locale) {
    let messages = []
    CoatingData.messages.forEach(item => {
      var active = true
      // messages.push(item.message)
      _.forEach(item.filters, (value, key) => {
        if (!value.includes(filterState[key])) {
          active = false
        }
      })
      if (active) {
        messages.push(translatedString(item.message, locale))
      }
    })
    return messages
  }
}

CoatingData.fields = require("../../../content/coatings/fields.yml")

CoatingData.coatings = {}
let req = require.context("../../../content/coatings/catalog", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const ref = /([\w-]*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.coatings[ref] = data
})

CoatingData.coatingsSorted = _.sortBy(CoatingData.coatings, "id")

CoatingData.filters = {}
req = require.context("../../../content/coatings/filters", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const ref = /(\w*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.filters[ref] = data
})

CoatingData.filtersSorted = _.sortBy(CoatingData.filters, "order")

CoatingData.messages = require("../../../content/coatings/messages.yml")

export default CoatingData

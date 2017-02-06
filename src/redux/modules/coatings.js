// import queryString from "query-string"

import { LOCATION_CHANGE } from "react-router-redux"

import CoatingData from "../../data/CoatingData"

export const SET_FILTER = "SET_FILTER"
export const SET_COATING_FILTER = "SET_COATING_FILTER"

const initialState = {
  filterState: CoatingData.initialFilterState(),
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FILTER:
      // action.asyncDispatch({ type: SET_COATING_FILTER, filter: state })
      return Object.assign({}, state, {
        filterState: CoatingData.updateFilterState(state.filterState, action.filterId, action.itemId)
      })
    case LOCATION_CHANGE: {
      return state
      // const query = queryString.parse(action.payload.search)
      // return Object.assign({}, state, {
      //   applicationId: Number(query.application),
      //   materialId: Number(query.material),
      // })
    }
    default:
      return state
  }
}

export function setFilter(filterId, itemId) {
  return { type: SET_FILTER, filterId: filterId, itemId: itemId }
}

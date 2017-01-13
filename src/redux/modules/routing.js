import queryString from "query-string"

import { LOCATION_CHANGE } from "react-router-redux"
import { SET_COATING_FILTER } from "./coatings"

// This initial state is *copied* from react-router-redux's
// routerReducer (the property name 'locationBeforeTransitions' is
// because this is designed for use with react-router)
const initialState = { locationBeforeTransitions: null }

export default function reducer(state = initialState, action) {
  // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
  if (action.type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload }
  }

  if (action.type === SET_COATING_FILTER) {
    // console.log(action)
    const { filter } = action
    let location = state.locationBeforeTransitions
    const query = {
      application: filter.applicationId,
      material: filter.materialId,
    }
    location = { ...location, search: "?" + queryString.stringify(query), action: 'PUSH' }
    return { ...state, locationBeforeTransitions: location }
  }

  return state
}

import queryString from "query-string"

import { LOCATION_CHANGE } from "react-router-redux"

export const SET_APPLICATION = "SET_APPLICATION"
export const SET_MATERIAL = "SET_MATERIAL"
export const SET_COATING_FILTER = "SET_COATING_FILTER"

const initialState = {
  applicationId: 0,
  materialId: 0,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_APPLICATION:
      state = Object.assign({}, state, { applicationId: Number(action.id) })
      if (state.applicationId == 0) {
        state = initialState
      }
      action.asyncDispatch({ type: SET_COATING_FILTER, filter: state })
      return state
    case SET_MATERIAL:
      state = Object.assign({}, state, { materialId: Number(action.id) })
      action.asyncDispatch({ type: SET_COATING_FILTER, filter: state })
      return state
    case LOCATION_CHANGE: {
      const query = queryString.parse(action.payload.search)
      return Object.assign({}, state, {
        applicationId: Number(query.application),
        materialId: Number(query.material),
      })
    }
    default:
      return state
  }
}

export function setApplication(id) {
  return { type: SET_APPLICATION, id }
}

export function setMaterial(id) {
  return { type: SET_MATERIAL, id }
}

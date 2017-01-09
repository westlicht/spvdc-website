import queryString from "query-string"

import { LOCATION_CHANGE } from "react-router-redux"

export const SET_APPLICATION = "SET_APPLICATION"
export const SET_MATERIAL = "SET_MATERIAL"
export const SET_COATING_FILTER = "SET_COATING_FILTER"

const initialState = {
  application: 0,
  material: 0,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_APPLICATION:
      state = Object.assign({}, state, { application: Number(action.value) })
      if (state.application == 0) {
        state = initialState
      }
      action.asyncDispatch({ type: SET_COATING_FILTER, filter: state })
      return state
    case SET_MATERIAL:
      state = Object.assign({}, state, { material: Number(action.value) })
      action.asyncDispatch({ type: SET_COATING_FILTER, filter: state })
      return state
    case LOCATION_CHANGE: {
      const query = queryString.parse(action.payload.search)
      return Object.assign({}, state, {
        application: Number(query.application),
        material: Number(query.material),
      })
    }
    default:
      return state
  }
}

export function setApplication(value) {
  return { type: SET_APPLICATION, value }
}

export function setMaterial(value) {
  return { type: SET_MATERIAL, value }
}

import queryString from "query-string"

import { LOCATION_CHANGE } from "react-router-redux"

export const SET_OPERATION = "SET_OPERATION"

export default function reducer(state = {}, action = {}) {
  if (action.type === SET_OPERATION) {
    return { operation: action.name }
  }

  // Now there's a LOCATION_CHANGE action we can set the operation
  // from the URL when the history changes (eg first page load, back
  // button etc.)
  if (action.type === LOCATION_CHANGE) {
    const query = queryString.parse(action.payload.search)
    // alert(JSON.stringify(query))


    // const pathname = action.payload.pathname
    // /redux-history-demo/:operation
    // const [, operation = ""] = pathname.split('/')
    return { operation: query.operation }
  }

  return state
}

export function setOperation(name) {
  return {
    type: SET_OPERATION,
    name,
  }
}

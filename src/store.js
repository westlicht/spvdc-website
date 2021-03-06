import { combineReducers } from "redux"
import createStore from "phenomic/lib/redux/createStore"
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from "phenomic/lib/redux/modules"
import * as reducers from "./redux/modules"

import { browserHistory } from "phenomic/lib/client"
import { syncHistoryWithStore } from "react-router-redux"


// This middleware will just add the property "async dispatch"
// to actions with the "async" propperty set to true
const asyncDispatchMiddleware = store => next => action => {
  let syncActivityFinished = false
  let actionQueue = []

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)) // flush queue
    actionQueue = []
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction])
    if (syncActivityFinished) {
      flushQueue()
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch })

  next(actionWithAsyncDispatch)
  syncActivityFinished = true
  flushQueue()
}



const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...reducers,
  }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
  [ asyncDispatchMiddleware ],
)

// webpack hot loading
if (module.hot) {
  // enable hot module replacement for reducers
  module.hot.accept([
    // "phenomic/lib/redux/modules",
    // will not be updated since it's a lib :)
    // but will still needs to be required

    // hot load your reducers
    "./redux/modules",
  ], () => {
    const updatedReducer = combineReducers({
      // we still need to combine all reducers
      ...require("phenomic/lib/redux/modules"),
      ...require("./redux/modules"),
    })
    store.replaceReducer(updatedReducer)
  })
}

if (browserHistory) {
  syncHistoryWithStore(
    browserHistory,
    store,
  )
}

export default store

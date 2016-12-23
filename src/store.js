import { combineReducers } from "redux"
import createStore from "phenomic/lib/redux/createStore"
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from "phenomic/lib/redux/modules"
import * as reducers from "./redux/modules"

import { browserHistory } from "phenomic/lib/client"
import { syncHistoryWithStore } from "react-router-redux"

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...reducers,
  }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
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

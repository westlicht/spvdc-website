
import enhanceCollection from "phenomic/lib/enhance-collection"

import invariant from "invariant"

// returns the page id based on the current location
export default function currentPageId(context) {
  const {
    location,
    collection,
  } = context

  invariant(location, "'location' is required from the context")
  invariant(collection, "'collection' is required from the context")

  // add leading delimiter
  let url = context.location.pathname
  url = url[0] == "/" ? url : "/" + url

  const page = enhanceCollection(context.collection, {
    filter: { __url: url },
  })[0]
  return page ? page.id : null
}

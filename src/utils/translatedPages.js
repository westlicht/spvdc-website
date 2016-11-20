
import enhanceCollection from "phenomic/lib/enhance-collection"

import currentPageId from "./currentPageId"

export default function translatedPages(context) {
  const id = currentPageId(context)
  return enhanceCollection(context.collection, {
    filter: { id: id },
    sorted: "locale"
  })
}

class CoatingData {

}

CoatingData.fields = require("../../../content/coatings/fields.yml")

CoatingData.coatings = {}
let req = require.context("../../../content/coatings/catalog", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const ref = /([\w-]*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.coatings[ref] = data
})

CoatingData.filters = {}
req = require.context("../../../content/coatings/filters", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const ref = /(\w*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.filters[ref] = data
})

CoatingData.finder = {}
req = require.context("../../../content/coatings/finder", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const ref = /(\w*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.finder[ref] = data
})

export default CoatingData

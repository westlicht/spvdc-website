// require("lodash")

class CoatingData {

}

CoatingData.fields = require("../../../content/coatings/fields.yml")

CoatingData.coatings = {}
let req = require.context("../../../content/coatings/catalog", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const data = req(key)
  CoatingData.coatings[data.id] = data
})

CoatingData.finder = {}
req = require.context("../../../content/coatings/finder", false, /\.(yml$)/)
req.keys().forEach(function(key) {
  const id = /(\w*)\.yml/.exec(key)[1]
  const data = req(key)
  CoatingData.finder[id] = data
})

export default CoatingData

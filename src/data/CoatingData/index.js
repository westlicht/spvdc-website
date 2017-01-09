require("lodash")
const lowdb = require("lowdb")

class CoatingData {

  static get db() {
    var db = lowdb("db")
    db.defaults({
      "applications": require("../../../content/coatings/applications.yml"),
      "materials": require("../../../content/coatings/materials.yml"),
      "substrates": require("../../../content/coatings/substrates.yml"),
      "coolings": require("../../../content/coatings/coolings.yml"),
      "temperatures": require("../../../content/coatings/temperatures.yml"),
    }).value()
    return db
  }
}

CoatingData.data = require("../../../content/contact/data.yml")

export default CoatingData

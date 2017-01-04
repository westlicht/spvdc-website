const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const vCard = require("vcards-js")
const lowerCase = require("lower-case")
const mkdirp = require("mkdirp")

const package = require("../package.json")
const contact = yaml.safeLoad(fs.readFileSync("./content/contact/data.yml", "utf8"))

// console.log(package.locales)

package.locales.map(locale => {
  contact.members.map(member => {
      v = vCard()
      v.firstName = member.firstName
      v.lastName = member.lastName
      v.organization = "swiss-PVD Coating AG" // TODO
      v.title = member.title[locale]
      v.workEmail = member.email
      v.workPhone = member.tel
      v.workFax = "" // TODO
      v.workUrl = "" // TODO

      // TODO
      v.workAddress.label = 'Work Address'
      v.workAddress.street = '123 Corporate Loop\nSuite 500'
      v.workAddress.city = 'Los Angeles'
      v.workAddress.stateProvince = 'CA'
      v.workAddress.postalCode = '54321'
      v.workAddress.countryRegion = 'United States of America'

      const filename = "./content/assets/" + locale + "/contact/" + lowerCase(member.firstName) + "-" + lowerCase(member.lastName) + ".vcf"
      console.log("Creating " + filename + " ...")

      const dir = path.dirname(filename)
      mkdirp(dir)
      v.saveToFile(filename)
  })
})

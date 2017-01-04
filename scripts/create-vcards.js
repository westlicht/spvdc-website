const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
const vCard = require("vcards-js")
const lowerCase = require("lower-case")
const mkdirp = require("mkdirp")

const package = require("../package.json")

const contact = yaml.safeLoad(fs.readFileSync("./content/contact/data.yml", "utf8"))
const address = contact.address

function translatedString(item, locale) {
  if (typeof(item) === "string") {
    return item
  } else {
    return item[locale]
  }
}

package.locales.map(locale => {
  contact.members.map(member => {
      v = vCard()
      v.firstName = member.firstName
      v.lastName = member.lastName
      v.organization = translatedString(address.name, locale)
      v.title = translatedString(member.title, locale)
      v.workEmail = member.email
      v.workPhone = member.tel
      v.workFax = contact.fax
      v.workUrl = contact.url

      v.workAddress.label = 'Work Address' // TODO
      v.workAddress.street = translatedString(address.street, locale)
      v.workAddress.city = translatedString(address.city, locale)
      v.workAddress.stateProvince = translatedString(address.province, locale)
      v.workAddress.postalCode = address.zipcode.toString()
      v.workAddress.countryRegion = translatedString(address.country, locale)

      const filename = "./content/assets/" + locale + "/contact/" + lowerCase(member.firstName) + "-" + lowerCase(member.lastName) + ".vcf"
      console.log("Creating " + filename + " ...")

      const dir = path.dirname(filename)
      mkdirp(dir)
      v.saveToFile(filename)
  })
})

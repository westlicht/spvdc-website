import translatedString from "../../utils/translatedString"

class ContactData {

  static address(locale) {
    const address = ContactData.data.address
    return [
      translatedString(address.name, locale),
      translatedString(address.street, locale),
      translatedString(address.lockBox, locale),
      address.zipCode.toString() + " " + translatedString(address.city, locale),
      translatedString(address.country, locale),
    ]
  }

  static times(locale) {
    return translatedString(ContactData.data.times, locale).split("\n").map(line => {
      return line
    })
  }

  static members(locale) {
    return ContactData.data.members.map(item => ({
      image: item.image || "/assets/img/team/placeholder.jpg",
      name: item.firstName + " " + item.lastName,
      title: translatedString(item.title, locale),
      email: item.email,
      phone: item.phone,
      vcard: "/assets/" + locale + "/contact/" + item.firstName.toLowerCase() + "-" + item.lastName.toLowerCase() + ".vcf",
    }))
  }

}

ContactData.data = require("../../../content/contact/data.yml")

export default ContactData

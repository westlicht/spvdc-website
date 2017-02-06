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

  static shortAddress(locale) {
    const address = ContactData.data.address
    return (
      translatedString(address.name, locale) + ", " +
      translatedString(address.street, locale) + ", " +
      address.zipCode.toString() + " " + translatedString(address.city, locale) + ", " +
      translatedString(address.country, locale)
    )
  }

  static persons(locale) {
    return ContactData.data.persons.map(item => ({
      image: item.image || "/assets/img/team/placeholder.jpg",
      name: item.firstName + " " + item.lastName,
      title: translatedString(item.title, locale),
      language: translatedString(item.language, locale),
      email: item.email,
      phone: item.phone,
      vcard: "/assets/" + locale + "/contact/" + item.firstName.toLowerCase() + "-" + item.lastName.toLowerCase() + ".vcf",
    }))
  }

}

ContactData.data = require("../../../content/contact/data.yml")

export default ContactData

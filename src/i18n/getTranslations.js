
import enhanceCollection from "phenomic/lib/enhance-collection"

export default function getTranslations(collection, ref) {
  const translations = enhanceCollection(collection, {
    filter: { ref: ref },
    sort: "locale",
  })

  // return translations
  return translations.map(item => ({ locale: item.locale, url: item.__url }))
}

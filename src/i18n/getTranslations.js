
import enhanceCollection from "phenomic/lib/enhance-collection"

import { localeFromURL } from "../intl"

export default function getTranslations(collection, ref) {
  const translations = enhanceCollection(collection, {
    filter: { ref: ref },
  })

  // return translations
  return translations.map(item => ({ locale: localeFromURL(item.__url), url: item.__url }))
}

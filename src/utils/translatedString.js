export default function(item, locale) {
  if (typeof(item) === "string") {
    return item
  } else {
    return item[locale]
  }
}

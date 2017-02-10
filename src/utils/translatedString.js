export default function(item, locale) {
  if (typeof(item) === "object") {
    return item[locale]
  } else {
    return item
  }
}

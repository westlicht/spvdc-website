export default function localeFromURL(url) {
  const locale = url.replace(/^\//, "").split("/")[0]
  return locale
}

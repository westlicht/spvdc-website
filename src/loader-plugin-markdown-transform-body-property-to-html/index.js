// @flow

var md = require("markdown-it")({
  html: true,
  typographer: true,
  linkify: true,
}).use(
  require("markdown-it-sub")
).use(
  require("markdown-it-sup")
)

function mdify(text) {
  return md.render(text)
}

export default (
  {
    result,
  }: PhenomicLoaderPluginInput
): PhenomicCollectionItem => {
  return {
    ...result,
    body: mdify(result.body),
  }
}

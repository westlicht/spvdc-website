// @flow

var md = require("markdown-it")()

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

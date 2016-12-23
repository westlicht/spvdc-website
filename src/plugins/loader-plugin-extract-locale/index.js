export default ({result}) => ({
  ...result,
  head: {
    ...result.head,
    locale: result.__url.replace(/^\//, "").split("/")[0]
  }
})

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, context) => {
  return (
    <div hidden>
      <Helmet
        meta={ [
          {
            name: "generator", content: `${
            process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
          },
          { property: "og:site_name", content: context.metadata.pkg.name },
          { name: "twitter:site", content: `@${ context.metadata.pkg.twitter }` },
        ] }
        script={ [
          { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=default,es6,Array.prototype.includes&flags=gated" },
        ] }
      />

      { /* meta viewport safari/chrome/edge */ }
      <Helmet
        meta={ [ {
          name: "viewport", content: "width=device-width, initial-scale=1",
        } ] }
      />
      <style>{ "@-ms-viewport { width: device-width; }" }</style>
    </div>
  )
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default DefaultHeadMeta

import React, { PropTypes } from "react"
import Helmet from "react-helmet"

import { joinUri } from "phenomic"

import translatedPages from "../../utils/translatedPages"

const DefaultHeadMeta = (props, context) => {
  const translations = translatedPages(context)
  return (
    <div hidden>
      {
        translations.map(item => (
          <Helmet
            key={ item.locale }
            link={ [
              { rel: "alternate", hreflang: item.locale, href: joinUri(context.metadata.pkg.homepage, item.__url) }
            ] }
          />
        ))
      }
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
          { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes" },
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
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default DefaultHeadMeta

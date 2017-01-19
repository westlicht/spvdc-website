import React, { PropTypes } from "react"
import { browserHistory } from "phenomic/lib/client"

import cookie from "react-cookie"
import browserLanguage from "../../intl/browserLanguage"

const Entry = (props, context) => {

  const locales = context.metadata.pkg.locales

  let locale = cookie.load("locale")
  if (!locales.includes(locale)) {
    locale = browserLanguage.pick(locales, locales[0])
  }

  if (browserHistory) {
    browserHistory.push("/" + locale)
  }

  return (
    <div></div>
  )
}

Entry.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Entry

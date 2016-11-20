import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"

// import getLang from "../../i18n/getLang"
// import getI18n from "../../i18n/get"

const numberOfLatestPosts = 6

const Homepage = (props, context) => {
  // const locale = getLang(context)

  const latestPosts = enhanceCollection(context.collection, {
    filter: { layout: "Post", locale: context.locale },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <Page { ...props }>
      <h2>
        <FormattedMessage
            id="homepage.latestPosts"
            defaultMessage="Latest Posts"
        />
      </h2>
      <PagesList pages={ latestPosts } />
    </Page>
  )
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Homepage

import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { BodyContainer } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { localeFromURL } from "../../intl"

import PageWrapper from "../PageWrapper"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import Section from "../../components/Section"
import PostList from "../../components/PostList"

// import styles from "./index.css"

const numberOfLatestPosts = 6

const Homepage = (props, context) => {
  // const locale = getLang(context)

  const latestPosts = enhanceCollection(context.collection, {
    filter: item => item.layout === "Post" && localeFromURL(item.__url) === context.locale,
    sort: "date",
    reverse: true,
  }).map(item => ({
    url: item.__url,
    title: item.title,
    date: item.date,
  }))
  .slice(0, numberOfLatestPosts)

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/stairs.jpg">
      <Section>
        <TwoColumns>
          <LeftColumn>
            <BodyContainer>{ props.body }</BodyContainer>
          </LeftColumn>
          <RightColumn>
            <h3>
              <FormattedMessage
                  id="homepage.latestPosts"
                  defaultMessage="Latest Posts"
              />
            </h3>
            <PostList pages={ latestPosts } />
          </RightColumn>
        </TwoColumns>
      </Section>
    </PageWrapper>
  )
}

Homepage.propTypes = {
  body: PropTypes.string,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Homepage

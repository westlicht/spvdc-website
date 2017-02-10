import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { BodyContainer, Link } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { localeFromURL } from "../../intl"

import PageWrapper from "../PageWrapper"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import Section from "../../components/Section"
import PostPreviewList from "../../components/PostPreviewList"

import styles from "./index.css"

const numberOfLatestPosts = 2

const Homepage = (props, context) => {
  const latestPosts = enhanceCollection(context.collection, {
    filter: item => item.layout === "Post" && localeFromURL(item.__url) === context.locale,
    sort: "date",
    reverse: true,
  }).map(item => ({
    url: item.__url,
    title: item.title,
    date: item.date,
    body: item.description,
  }))
  .slice(0, numberOfLatestPosts)

  const urlPostIndex = enhanceCollection(context.collection, {
    filter: item => item.layout === "PostIndex" && localeFromURL(item.__url) === context.locale,
  })[0].__url

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/home.jpg">
      <Section>
        <TwoColumns>
          <LeftColumn>
            <BodyContainer>{ props.body }</BodyContainer>
          </LeftColumn>
          <RightColumn>
            <h3>
              <FormattedMessage id="homepage.latestPosts" defaultMessage="Latest Posts" />
            </h3>
            { latestPosts.length > 0 ? (
              [
                (<PostPreviewList posts={ latestPosts } />),
                (<Link className={ styles.allPosts } to={ urlPostIndex }><FormattedMessage id="homepage.allPosts" defaultMessage="All Posts" /></Link>)
              ]
            ) : (
              <FormattedMessage id="homepage.noPosts" defaultMessage="No Posts" />
            )}
          </RightColumn>
        </TwoColumns>
      </Section>
    </PageWrapper>
  )
}

Homepage.propTypes = {
  body: PropTypes.string.isRequired,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Homepage

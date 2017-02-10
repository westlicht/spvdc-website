import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { localeFromURL } from "../../intl"

import PageWrapper from "../PageWrapper"

import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import PostPreviewList from "../../components/PostPreviewList"

// import styles from "./index.css"

const PostIndex = (props, context) => {

  const posts = enhanceCollection(context.collection, {
    filter: item => item.layout === "Post" && localeFromURL(item.__url) === context.locale,
    sort: "date",
    reverse: true,
  }).map(item => ({
    url: item.__url,
    title: item.title,
    date: item.date,
    body: item.description,
  }))

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/news.jpg">
      <Section>
        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        <PostPreviewList posts={ posts }/>
      </Section>
    </PageWrapper>
  )
}

PostIndex.propTypes = {
  body: PropTypes.string,
}

PostIndex.contextTypes = {
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default PostIndex

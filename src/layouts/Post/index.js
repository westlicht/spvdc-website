import React, { PropTypes } from "react"
import { FormattedDate } from "react-intl"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import DownloadList from "../../components/DownloadList"

import styles from "./index.css"

const Post = (props) => {
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/news.jpg">
      <Section>
        {
          pageDate && (
            <span className={ styles.date }>
              <FormattedDate
                value={new Date(pageDate)}
                year='numeric'
                month='long'
                day='2-digit'
              />
            </span>
          )
        }

        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        <DownloadList downloads={ props.head.downloads } />
      </Section>
    </PageWrapper>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Post

import React, { PropTypes } from "react"
import { FormattedDate } from "react-intl"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"

import styles from "./index.css"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/stairs.jpg">
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
        <h1>{ props.head.title }</h1>
        <BodyContainer>{ props.body }</BodyContainer>
      </Section>
    </PageWrapper>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Post

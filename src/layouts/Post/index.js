import React, { PropTypes } from "react"
import { FormattedDate } from "react-intl"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Banner from "../../components/Banner"
import Section from "../../components/Section"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <PageWrapper { ...props }>
      <Banner image="/assets/img/stairs.jpg" />
      <Section>
        {
          pageDate &&
          <FormattedDate
            value={new Date(pageDate)}
            year='numeric'
            month='long'
            day='2-digit'
          />
        }
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

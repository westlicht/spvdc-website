import React, { PropTypes } from "react"
import { FormattedDate } from "react-intl"
import { BodyContainer } from "phenomic"

import Page from "../Page2"
import Banner from "../../components/Banner"
import Section from "../../components/Section"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page { ...props }>
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
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Post

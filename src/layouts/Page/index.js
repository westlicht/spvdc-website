import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Banner from "../../components/Banner"
import Section from "../../components/Section"

const Page = (props) => {
  return (
    <PageWrapper { ...props }>
      { props.head.banner && props.head.banner.image && <Banner image={ props.head.banner.image } /> }
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
      </Section>
    </PageWrapper>
  )
}

Page.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Page

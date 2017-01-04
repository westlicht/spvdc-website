import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"

const Page = (props) => {
  return (
    <PageWrapper { ...props }>
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

import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import Page2 from "../Page2"
import Banner from "../../components/Banner"
import Section from "../../components/Section"

const Page = (props) => {
  return (
    <Page2 { ...props }>
      { props.head.banner && props.head.banner.image && <Banner image={ props.head.banner.image } /> }
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
      </Section>
    </Page2>
  )
}

Page.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Page

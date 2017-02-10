import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import PersonList from "../../components/PersonList"

import ContactData from "../../data/ContactData"

const Contact = (props, context) => {

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/contact.jpg">
      <Section>
        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        <PersonList persons={ ContactData.persons(context.locale) } />
      </Section>
    </PageWrapper>
  )
}

Contact.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

Contact.contextTypes = {
  locale: PropTypes.string,
}

export default Contact

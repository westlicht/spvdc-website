import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import PersonList from "../../components/PersonList"
import GoogleMap from "../../components/GoogleMap"

import ContactData from "../../data/ContactData"

import styles from "./index.css"

const Contact = (props, context) => {

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/contact.jpg">
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <PersonList persons={ ContactData.persons(context.locale) } />
      </Section>
      <GoogleMap className={ styles.map }/>
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

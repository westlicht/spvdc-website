import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import TeamList from "../../components/TeamList"
import GoogleMap from "../../components/GoogleMap"
// import { Gmaps, Marker, InfoWindow } from "react-gmaps"

import ContactData from "../../data/ContactData"

import styles from "./index.css"

const Contact = (props, context) => {

  // const address = ContactData.address(context.locale).join("<br>")

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/contact.jpg">
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <TeamList members={ ContactData.members(context.locale) } />
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

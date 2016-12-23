import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import Page from "../Page2"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import ServiceItem from "../../components/ServiceItem"

const Service = (props) => {
  return (
    <Page { ...props }>
      <Banner image="/assets/img/banner/service.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        {
          props.head.sections.map(item => (
            <ServiceItem key={ item.title } icon={ item.icon } image={ item.image } title={ item.title } body={ item.body }/>
          ))
        }
      </Section>
    </Page>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service

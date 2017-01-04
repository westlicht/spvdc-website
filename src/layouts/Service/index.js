import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import ServiceItem from "../../components/ServiceItem"

const Service = (props) => {
  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/service.jpg">
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        {
          props.head.sections.map(item => (
            <ServiceItem key={ item.title } icon={ item.icon } image={ item.image } title={ item.title } body={ item.body }/>
          ))
        }
      </Section>
    </PageWrapper>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service

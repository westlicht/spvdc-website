import React, { PropTypes } from "react"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import ServiceItem from "../../components/ServiceItem"

const Service = (props) => {
  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/service.jpg">
      <Section>
        <HeaderContainer { ...props } />
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

import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import PartnerItem from "../../components/PartnerItem"

const Service = (props) => {
  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/technology.jpg">
      <Section>
        <TwoColumns>
          <LeftColumn>
            <BodyContainer>{ props.body }</BodyContainer>
          </LeftColumn>
          <RightColumn>
            <h3>Partners</h3>
            {
              props.head.partners && props.head.partners.map(item => (
                <PartnerItem key={ item.title } link={ item.link } image={ item.image } title={ item.title } body={ item.body }/>
              ))
            }
          </RightColumn>
        </TwoColumns>
      </Section>
    </PageWrapper>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service

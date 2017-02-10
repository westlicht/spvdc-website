import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import PartnerList from "../../components/PartnerList"

const Service = (props) => {
  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/technology.jpg">
      <Section>
        <TwoColumns>
          <LeftColumn>
            <HeaderContainer { ...props } />
            <BodyContainer>{ props.body }</BodyContainer>
          </LeftColumn>
          <RightColumn>
            <h3>
              <FormattedMessage id="technology.partners" defaultMessage="Our partners" />
            </h3>
            <PartnerList partners={ props.head.partners } />
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

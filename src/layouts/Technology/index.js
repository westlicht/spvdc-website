import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import PartnerList from "../../components/PartnerList"
import DownloadList from "../../components/DownloadList"

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
        <DownloadList downloads={ props.head.downloads } />
      </Section>
    </PageWrapper>
  )
}

Service.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Service

import React from "react"
import PropTypes from "prop-types"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import DownloadList from "../../components/DownloadList"

const Page = (props) => {
  return (
    <PageWrapper { ...props }>
      <Section>
        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        <DownloadList downloads={ props.head.downloads } />
      </Section>
    </PageWrapper>
  )
}

Page.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Page

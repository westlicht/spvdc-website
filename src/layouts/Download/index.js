import React, { PropTypes } from "react"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import DownloadItem from "../../components/DownloadItem"

const Download = (props) => {
  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/download.jpg">
      <Section>
        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        {
          props.head.downloads.map(item => (
            <DownloadItem description={ item.description } url={ item.url }/>
          ))
        }
      </Section>
  </PageWrapper>
  )
}

Download.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Download

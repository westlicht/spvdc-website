import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import Page from "../Page2"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import DownloadItem from "../../components/DownloadItem"

const Download = (props) => {
  return (
    <Page { ...props }>
      <Banner image="/assets/img/banner/download.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        {
          props.head.downloads.map(item => (
            <DownloadItem description={ item.description } url={ item.url }/>
          ))
        }
      </Section>
  </Page>
  )
}

Download.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default Download

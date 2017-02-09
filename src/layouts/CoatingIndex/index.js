import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import isBrowser from "../../utils/isBrowser"

import PageWrapper from "../PageWrapper"

import Section from "../../components/Section"
import CoatingFinderContainer from "../../containers/CoatingFinderContainer"

// import styles from "./index.css"

const CoatingIndex = (props) => {

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/coatings.jpg">
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        { isBrowser() && (
          <CoatingFinderContainer />
        )}
      </Section>
    </PageWrapper>
  )
}

CoatingIndex.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

export default CoatingIndex

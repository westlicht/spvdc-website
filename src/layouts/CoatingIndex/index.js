import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
// import enhanceCollection from "phenomic/lib/enhance-collection"
import isBrowser from "../../utils/isBrowser"

import PageWrapper from "../PageWrapper"

import Section from "../../components/Section"
import CoatingFinderContainer from "../../containers/CoatingFinderContainer"

// import CoatingData from "../../data/CoatingData"

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

// CoatingIndex.contextTypes = {
//   collection: PropTypes.array.isRequired,
//   locale: PropTypes.string.isRequired,
// }

export default CoatingIndex

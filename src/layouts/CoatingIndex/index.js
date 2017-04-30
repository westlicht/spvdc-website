import React, { PropTypes } from "react"
import isBrowser from "../../utils/isBrowser"
import Markdown from "react-markdownit"

import PageWrapper from "../PageWrapper"

import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import CoatingFinderContainer from "../../containers/CoatingFinderContainer"

// import styles from "./index.css"

const CoatingIndex = (props) => {

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/coatings.jpg">
      <Section>
        <HeaderContainer { ...props } />
        <BodyContainer>{ props.body }</BodyContainer>
        { isBrowser() && (
          <CoatingFinderContainer />
        )}
        { props.head.footnote && (
          <Markdown>{ props.head.footnote }</Markdown>
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

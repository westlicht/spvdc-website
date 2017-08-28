import React from "react"
import PropTypes from "prop-types"

import DocPageWrapper from "../DocPageWrapper"
import Section from "../../components/Section"
import BodyContainer from "../../components/BodyContainer"

const DocPage = (props) => {
  return (
    <DocPageWrapper { ...props }>
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
      </Section>
    </DocPageWrapper>
  )
}

DocPage.propTypes = {
  body: PropTypes.string,
}

export default DocPage

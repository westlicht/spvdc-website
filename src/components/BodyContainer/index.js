import React, { PropTypes } from "react"
import { BodyContainer as PhenomicBodyContainer } from "phenomic"

const BodyContainer = ({ children }) => (
  <PhenomicBodyContainer>{ children }</PhenomicBodyContainer>
)

BodyContainer.propTypes = {
  children: PropTypes.node
}

export default BodyContainer

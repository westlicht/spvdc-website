import React from "react"
import PropTypes from "prop-types"
import { BodyContainer as PhenomicBodyContainer } from "phenomic"

const BodyContainer = ({ children }) => (
  <PhenomicBodyContainer>{ children }</PhenomicBodyContainer>
)

BodyContainer.propTypes = {
  children: PropTypes.node
}

export default BodyContainer

import React, { PropTypes } from "react"
import { injectIntl, intlShape } from "react-intl"

import Enum from "./enum"
import Filter from "./filter"

import CoatingData from "../../data/CoatingData"

import translatedString from "../../utils/translatedString"

const _ = require("lodash")

const CoatingFinder = (props, { locale }) => {
  let {
    applicationId,
    materialId,
    substrateId,
    coolingId,
    onChangeApplication,
    onChangeMaterial,
    onChangeSubstrate,
    onChangeCooling,
    intl,
  } = props

  const applications = CoatingData.finder.applications
  const application = _(applications).filter({ id: applicationId }).first()
  const applicationItems = applications.map(item => ({
    id: item.id,
    title: translatedString(item.title, locale),
  }))

  const materials = _(CoatingData.finder.materials).filter(
    item => application && application.materials ? _(application.materials).includes(item.id) : true
  ).value()
  // const material = _(materials).filter({ id: materialId }).first()
  const materialItems = materials.map(item => ({
    id: item.id,
    title: translatedString(item.title, locale),
  }))

  const substrates = CoatingData.finder.substrates
  const substrateItems = substrates.map(item => ({
    id: item.id,
    title: translatedString(item.title, locale),
  }))

  const coolings = CoatingData.finder.coolings
  const coolingItems = coolings.map(item => ({
    id: item.id,
    title: translatedString(item.title, locale),
  }))

  const showMaterial = applicationId != 0
  const showSubstrate = applicationId != 0
  const showCooling = applicationId != 0

  return (
    <div>
      {/* <p>{ JSON.stringify(props) }</p> */}
      {/* <p>{ JSON.stringify(application) }</p> */}
      <Filter title={ intl.formatMessage({ id: "coatings.finder.application"}) }>
        <Enum items={ applicationItems } index={ applicationId } onChange={ onChangeApplication } />
      </Filter>
      {
        showMaterial && (
          <Filter title={ intl.formatMessage({ id: "coatings.finder.material"}) }>
            <Enum items={ materialItems } index={ materialId } onChange={ onChangeMaterial } />
          </Filter>
        )
      }
      {
        showSubstrate && (
          <Filter title={ intl.formatMessage({ id: "coatings.finder.substrate"}) }>
            <Enum items={ substrateItems } index={ substrateId } onChange={ onChangeSubstrate } />
          </Filter>
        )
      }
      {
        showCooling && (
          <Filter title={ intl.formatMessage({ id: "coatings.finder.cooling"}) }>
            <Enum items={ coolingItems } index={ coolingId } onChange={ onChangeCooling } />
          </Filter>
        )
      }
    </div>
  )
}

CoatingFinder.propTypes = {
  applicationId: PropTypes.number,
  materialId: PropTypes.number,
  substrateId: PropTypes.number,
  coolingId: PropTypes.number,
  onChangeApplication: PropTypes.func,
  onChangeMaterial: PropTypes.func,
  onChangeSubstrate: PropTypes.func,
  onChangeCooling: PropTypes.func,
  intl: intlShape.isRequired,
}

CoatingFinder.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default injectIntl(CoatingFinder)

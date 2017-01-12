import React, { PropTypes } from "react"

import Enum from "./enum"
import Filter from "./filter"

import CoatingData from "../../data/CoatingData"

import translatedString from "../../utils/translatedString"

const CoatingFinder = (props, { locale }) => {
  let {
    application,
    material,
    substrate,
    cooling,
    onChangeApplication,
    onChangeMaterial,
    onChangeSubstrate,
    onChangeCooling,
  } = props

  const applications = CoatingData.finder.applications
  const applicationItems = applications.map(item => ({
    id: item.id,
    title: translatedString(item.title, locale),
  }))

  const materials = CoatingData.finder.materials
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

  const showMaterial = application != 0
  const showSubstrate = application != 0
  const showCooling = application != 0

  return (
    <div>
      <p>{ JSON.stringify(props) }</p>
      <Filter title="Applikation">
        <Enum items={ applicationItems } index={ application } onChange={ onChangeApplication } />
      </Filter>
      {
        showMaterial && (
          <Filter title="Material">
            <Enum items={ materialItems } index={ material } onChange={ onChangeMaterial } />
          </Filter>
        )
      }
      {
        showSubstrate && (
          <Filter title="Substrat">
            <Enum items={ substrateItems } index={ substrate } onChange={ onChangeSubstrate } />
          </Filter>
        )
      }
      {
        showCooling && (
          <Filter title="Kühlen">
            <Enum items={ coolingItems } index={ cooling } onChange={ onChangeCooling } />
          </Filter>
        )
      }
      {/* <Filter title="Temperatur">
        <Enum items={ temperatureItems } index={ cooling } onChange={ onChangeTemperature } />
      </Filter> */}
    </div>
  )

  //       {isCorrect && <span style={{color: 'green' }}>{tick}</span>}
  //       {operation && !isCorrect && <span style={{color: 'red' }}>{cross}</span>}
}

CoatingFinder.propTypes = {
  application: PropTypes.number,
  material: PropTypes.number,
  substrate: PropTypes.number,
  cooling: PropTypes.number,
  onChangeApplication: PropTypes.func,
  onChangeMaterial: PropTypes.func,
  onChangeSubstrate: PropTypes.func,
  onChangeCooling: PropTypes.func,
}

CoatingFinder.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default CoatingFinder

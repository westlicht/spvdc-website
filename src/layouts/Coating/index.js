import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { BodyContainer } from "phenomic"

const Carousel = require('react-responsive-carousel').Carousel
require("react-responsive-carousel/lib/styles/carousel.min.css")

import isBrowser from "../../utils/isBrowser"


import transformMarkdown from "../../transform-markdown"
import RawHtml from "react-raw-html"

import translatedString from "../../utils/translatedString"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
// import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import SimpleTable from "../../components/SimpleTable"
import CoatingFinderContainer from "../../containers/CoatingFinderContainer"

import CoatingData from "../../data/CoatingData"

import styles from "./index.css"

const Coating = (props, { locale }) => {

  const id = props.head.id
  const fields = CoatingData.fields
  const coating = CoatingData.coatings[id]

  // create specification table
  let footnotes = []
  const specifications = fields.map(field => {
    let title = field.title[locale]
    if (field.footnote) {
      footnotes.push(field.footnote[locale])
      title += " " + "*".repeat(footnotes.length)
    }
    title = (<RawHtml.span>{ transformMarkdown(title) }</RawHtml.span>)

    const data = coating.fields[field.id]
    let value = data ? translatedString(data) : "-"
    if (field.units) {
      value += " " + field.units
    }
    return {
      title: title,
      value: value,
    }
  })

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/coatings.jpg">
      <Section>
        <h1>{ coating.name }</h1>
        <div className={ styles.container }>
          <div className={ styles.left }>
            <div className={ styles.image }>
              <Carousel showArrows={ false }  showStatus={ false } showThumbs={ false }>
                <img src={ coating.images[0] } />
                <img src={ coating.images[0] } />
                <img src={ coating.images[0] } />
                <img src={ coating.images[0] } />
              </Carousel>
            </div>
          </div>
          <div className={ styles.right }>
            <div className={ styles.body }>
              <BodyContainer>{ props.body }</BodyContainer>
            </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div className={ styles.left }>
            <p></p>
          </div>
          <div className={ styles.right }>
            <div className={ styles.specs }>
              <h3>
                <FormattedMessage id="coatings.specification" defaultMessage="Specification" />
              </h3>
              <SimpleTable rows={ specifications } />
              {
                footnotes.map((footnote, index) => (
                  <p key={ index }>{ "*".repeat(index + 1) + " " + footnote }</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className={ styles.separator }></div>
        <h2>
          <FormattedMessage id="coatings.coatings" defaultMessage="Coatings" />
        </h2>
        { isBrowser() && (
          <CoatingFinderContainer />
        )}
      </Section>
    </PageWrapper>
  )
}

Coating.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

Coating.contextTypes = {
  locale: PropTypes.string.isRequired,
}

export default Coating

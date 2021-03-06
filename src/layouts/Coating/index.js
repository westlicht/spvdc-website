import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import Markdown from "react-markdownit"
import RawHtml from "react-raw-html"

import _ from "lodash"

const Carousel = require('react-responsive-carousel').Carousel
require("react-responsive-carousel/lib/styles/carousel.min.css")

import isBrowser from "../../utils/isBrowser"

import translatedString from "../../utils/translatedString"

import PageWrapper from "../PageWrapper"
import Section from "../../components/Section"
import HeaderContainer from "../../components/HeaderContainer"
import BodyContainer from "../../components/BodyContainer"
import SimpleTable from "../../components/SimpleTable"
import DownloadList from "../../components/DownloadList"
import CoatingFinderContainer from "../../containers/CoatingFinderContainer"

import CoatingData from "../../data/CoatingData"

import styles from "./index.css"

const Coating = (props, { locale }) => {

  const id = props.head.id
  const specs = CoatingData.specs
  const fields = specs.fields
  const coating = CoatingData.coatings[id]

  let footnotes = [
    (
      <div className={ styles.footnote } key="general">
        <Markdown className={ styles.footnoteContent }>{ translatedString(specs.footnote, locale) }</Markdown>
      </div>
    )
  ]

  let footnoteIndex = 0
  const addFootnote = (body) => {
    footnoteIndex += 1
    footnotes.push(
      <div
        id={ "footnote" + footnoteIndex }
        className={ styles.footnote + " anchor" }
        key={ footnoteIndex }
      >
        <span className={ styles.footnoteAnchor }>{ "[" + footnoteIndex + "]" }</span>
        <Markdown className={ styles.footnoteContent }>{ body }</Markdown>
      </div>
    )
    return (<span key="footnote"><sup><a href={ "#footnote" + footnoteIndex }>{ "[" + footnoteIndex + "]" }</a></sup></span>)
  }

  const titles = fields.map(field => {
    // const titleText = translatedString(field.title, locale)
    const titleText = [
      translatedString(field.title, locale),
      field.units ? "[" + field.units + "]" : null
    ].join(" ")

    return [
      (<RawHtml.span key="value">{ titleText }</RawHtml.span>),
      field.footnote ? addFootnote(translatedString(field.footnote, locale)) : null,
    ]
  })

  const values = fields.map(field => {
    const data = coating.fields[field.id]
    const valueText = (data && data.value) ? String(translatedString(data.value, locale)) : "-"
    // const valueText = [
    //   (data && data.value) ? String(translatedString(data.value, locale)) : "-",
    //   field.units,
    // ].join(" ")
    return [
      (<RawHtml.span key="value">{ valueText }</RawHtml.span>),
      (data && data.footnote) ? addFootnote(translatedString(data.footnote, locale)) : null,
    ]
  })

  const specifications = _.zip(titles, values).map(item => ({
    title: item[0],
    value: item[1],
  }))

  return (
    <PageWrapper { ...props } bannerImage="/assets/img/banner/coatings.jpg">
      <Section>
        <HeaderContainer { ...props } />
        <div className={ styles.container }>
          <div className={ styles.left }>
            <div className={ styles.body }>
              <BodyContainer>{ props.body }</BodyContainer>
            </div>
          </div>
          <div className={ styles.right }>
            <div className={ styles.image }>
              <Carousel
                showArrows={ false }
                showStatus={ false }
                showThumbs={ false }
                showIndicators={ coating.images.length > 1 }
              >
                {
                  coating.images.map((image, index) => (
                    <img src={ image } alt={ props.head.title } key={ index }/>
                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div className={ styles.left }>
            <div className={ styles.specification }>
              <h3>
                <FormattedMessage id="coatings.specification" defaultMessage="Specification" />
              </h3>
              <SimpleTable rows={ specifications } />
              <div className={ styles.footnotes }>
                { footnotes }
              </div>
            </div>
          </div>
          <div className={ styles.right }>
            { props.head.downloads ? (
              <div className={ styles.downloads }>
                <h3>
                  <FormattedMessage id="general.downloads" defaultMessage="Downloads" />
                </h3>
                <DownloadList downloads={ props.head.downloads } />
              </div>
            ) : (
              <div className={ styles.downloads }></div>
            )}
          </div>
        </div>
        <div className={ styles.finder }>
          <h2>
            <FormattedMessage id="coatings.coatings" defaultMessage="Coatings" />
          </h2>
          { isBrowser() && (
            <CoatingFinderContainer />
          )}
        </div>
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

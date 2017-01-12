import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"

import transformMarkdown from "../../transform-markdown"
import RawHtml from "react-raw-html"

import PageWrapper from "../PageWrapper"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import Section from "../../components/Section"
import SimpleTable from "../../components/SimpleTable"

import CoatingData from "../../data/CoatingData"

import styles from "./index.css"

const Coating = (props, { collection, locale }) => {

  const coatingsCollection = enhanceCollection(collection, {
    filter: { layout: "Coating", locale: locale },
  })

  const coatingItems = coatingsCollection.map(item => ({
    name: item.title,
    url: item.__url,
  }))

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
    let value = data !== null && typeof(data) === "object" ? data[locale] : data
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
        <TwoColumns>
          <LeftColumn>
            <h1>{ coating.name }</h1>
            <div className={ styles.info }>
              <img className={ styles.image } src={ coating.images[0] }></img>
              <p>{ coating.description && coating.description[locale] }</p>
            </div>
            <div className={ styles.specs }>
              <h3>
                <FormattedMessage id="coatings.specification" defaultMessage="Specification" />
              </h3>
              <SimpleTable rows={ specifications } />
              {
                footnotes.map((footnote, index) => (
                  <p>{ "*".repeat(index + 1) + " " + footnote }</p>
                ))
              }
            </div>
          </LeftColumn>
          <RightColumn>
            <h3>
              <FormattedMessage id="coatings.coatings" defaultMessage="Coatings" />
            </h3>
            <ul>
              {
                coatingItems.map(item => (
                  <li key={ item.name }>
                    <Link to={ item.url } activeStyle={{ color:"red" }}>{ item.name }</Link>
                  </li>
                ))
              }
            </ul>
            {/* <NavigationMenu items={ coatingItems } /> */}
          </RightColumn>
        </TwoColumns>
      </Section>
    </PageWrapper>
  )
}

Coating.propTypes = {
  head: PropTypes.object.isRequired,
}

Coating.contextTypes = {
  locale: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
}

export default Coating

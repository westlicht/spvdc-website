import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"

import transformMarkdown from "../../transform-markdown"
import RawHtml from "react-raw-html"

import Page from "../Page2"
import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import SimpleTable from "../../components/SimpleTable"

import styles from "./index.css"

const Coating = (props, { collection, locale }) => {

  const coatingsCollection = enhanceCollection(collection, {
    filter: { layout: "Coating", locale: locale },
  })

  const coatingItems = coatingsCollection.map(item => ({
    name: item.title,
    url: item.__url,
  }))

  // const locale = context.locale
  const id = props.head.id
  const coatings = require("../../../content/coatings").default

  const coatingTemplate = coatings.template
  const coatingData = coatings.coatings[id]

  // create specification table
  let footnotes = []
  const specifications = coatingTemplate.fields.map(field => {
    let title = field.title[locale]
    if (field.footnote) {
      footnotes.push(field.footnote[locale])
      title += " " + "*".repeat(footnotes.length)
    }
    title = (<RawHtml.span>{ transformMarkdown(title) }</RawHtml.span>)

    const data = coatingData.fields[field.id]
    let value = data !== null && typeof(data) === "object" ? data[locale] : data
    if (field.units) {
      value += " " + field.units
    }
    return {
      title: title,
      value: value,
    }
  })

  // props.head.banner = { image: "/assets/img/banner/coatings.jpg" }

  return (
    <Page { ...props }>
      <Banner image="/assets/img/banner/coatings.jpg" />
      <Section>
        <TwoColumns>
          <LeftColumn>
            <h1>{ coatingData.name }</h1>
            <div className={ styles.info }>
              <img className={ styles.image } src={ coatingData.images[0] }></img>
              <p>{ coatingData.description && coatingData.description[locale] }</p>
            </div>
            <div className={ styles.specs }>
              <h3>Specification</h3>
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
              <FormattedMessage
                  id="coatings.coatings"
                  defaultMessage="Coating Index"
              />
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
    </Page>
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

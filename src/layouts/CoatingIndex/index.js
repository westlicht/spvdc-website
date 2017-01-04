import React, { PropTypes } from "react"
import { FormattedMessage } from "react-intl"
import { BodyContainer, Link } from "phenomic"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PageWrapper from "../PageWrapper"

import { TwoColumns, LeftColumn, RightColumn } from "../../components/TwoColumns"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import PuzzleContainer from "../../containers/PuzzleContainer"
// import NavigationMenu from "../../components/NavigationMenu"

// import styles from "./index.css"

const CoatingIndex = (props, context) => {

  const coatings = enhanceCollection(context.collection, {
    filter: { layout: "Coating", locale: context.locale },
  })

  const coatingItems = coatings.map(item => ({
    name: item.title,
    url: item.__url,
  }))

  return (
    <PageWrapper { ...props }>
      <Banner image="/assets/img/banner/coatings.jpg" />
      <Section>
        <TwoColumns>
          <LeftColumn>
            <BodyContainer>{ props.body }</BodyContainer>
            <PuzzleContainer />
          </LeftColumn>
          <RightColumn>
            <h3>
              <FormattedMessage
                  id="coatings.coatings"
                  defaultMessage="Coatings"
              />
            </h3>
            <ul>
              {
                coatingItems.map(item => (
                  <li key={ item.name }>
                    <Link to={ item.url }>{ item.name }</Link>
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

CoatingIndex.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

CoatingIndex.contextTypes = {
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default CoatingIndex

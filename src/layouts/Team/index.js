import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import Page from "../Page2"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import TeamList from "../../components/TeamList"

const Team = (props) => {
  return (
    <Page { ...props }>
      <Banner image="/assets/img/banner/team.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <TeamList members={ props.head.members } />
      </Section>
    </Page>
  )
}

Team.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Team

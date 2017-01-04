import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import TeamList from "../../components/TeamList"

const Team = (props) => {
  return (
    <PageWrapper { ...props }>
      <Banner image="/assets/img/banner/team.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <TeamList members={ props.head.members } />
      </Section>
    </PageWrapper>
  )
}

Team.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Team

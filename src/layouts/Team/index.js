import React, { PropTypes } from "react"

import Page from "../Page"
import MemberList from "../../components/MemberList"

const Team = (props) => {
  const members = props.head.members
  return (
    <Page { ...props }>
      <MemberList members={members} />
    </Page>
  )
}

Team.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Team

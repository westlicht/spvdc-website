import React, { PropTypes } from "react"

import PlainPage from "../PlainPage"
import TeamList from "../../components/TeamList"

const Team = (props) => {
  const members = props.head.members
  return (
    <PlainPage { ...props }>
      <TeamList members={members} />
    </PlainPage>
  )
}

Team.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Team

import React, { PropTypes } from "react"

import PlainPage from "../PlainPage"
import MemberList from "../../components/MemberList"

const Team = (props) => {
  const members = props.head.members
  return (
    <PlainPage { ...props }>
      <section className="wrapper-content">
        <MemberList members={members} />
      </section>
    </PlainPage>
  )
}

Team.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Team

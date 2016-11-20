import React, { PropTypes } from "react"

import MemberDetail from "../MemberDetail"

const MemberList = ({ members }) => {
  return (
    <div>
      {
        members.map(member => (
          <MemberDetail key={ member.name } member={ member } />
        ))
      }
    </div>
  )
}

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
}

export default MemberList

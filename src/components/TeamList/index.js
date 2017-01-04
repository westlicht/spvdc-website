import React, { PropTypes } from "react"

import TeamItem from "../TeamItem"

import styles from "./index.css"

const TeamList = ({ members }) => {
  return (
    <div className={ styles.list }>
      {
        members.map(member => (
          <TeamItem key={ member.name } member={ member } />
        ))
      }
    </div>
  )
}

TeamList.propTypes = {
  members: PropTypes.arrayOf(TeamItem.propTypes.member),
}

export default TeamList

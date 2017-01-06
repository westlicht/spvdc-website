import React, { PropTypes } from "react"

import PartnerItem from "./item.js"

import styles from "./index.css"

const PartnerList = ({ partners }) => {
  return (
    <ul className={ styles.list }>
      {
        partners.map((partner) => (
          <li className={ styles.item } key={ partner.url }>
            <PartnerItem partner={ partner } />
          </li>
        ))
      }
    </ul>
  )
}

PartnerList.propTypes = {
  partners: PropTypes.arrayOf(PartnerItem.propTypes.partner),
}

export default PartnerList

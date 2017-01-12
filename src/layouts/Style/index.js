import React from "react"
// import React, { PropTypes } from "react"

import styles from "./index.css"
import colors from "./colors.css"

const Style = () => {

  return (
    <div className={ styles.container }>
      <h1>Style Overview</h1>
      <h2>Colors</h2>
      <div className={ styles.colorContainer }>
        {
          Object.keys(colors).map(key => (
            <div className={ styles.colorItem }>
              <div className={ colors[key] }></div>
              <span>{ key }</span>
            </div>
            // <div className={ [styles.colorItem, colors[key]].join(" ") }>
            //   <span>{ key }</span>
            // </div>
          ))
        }
      </div>

    </div>
  )
}

export default Style

import React, { PropTypes } from "react"

import DocPageWrapper from "../DocPageWrapper"
import Section from "../../components/Section"
import BodyContainer from "../../components/BodyContainer"

import styles from "./index.css"
import colors from "./colors.css"

const DocColors = (props) => {
  return (
    <DocPageWrapper { ...props }>
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <div className={ styles.colorContainer }>
          {
            Object.keys(colors).map(key => (
              <div className={ styles.colorItem } key={ key }>
                <div className={ colors[key] }></div>
                <span>{ key }</span>
              </div>
            ))
          }
        </div>
      </Section>
    </DocPageWrapper>
  )
}

DocColors.propTypes = {
  body: PropTypes.string,
}

export default DocColors

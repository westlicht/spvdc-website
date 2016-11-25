import React, { PropTypes } from "react"

import { BodyContainer } from "phenomic"

import Loading from "../../components/Loading"


// import Page from "../Page"

const PlainPage = (props) => {
  return (
    <div>
      {
        props.head.banner && (
          <div className="wrapper-banner" style={{backgroundImage: "url(" + props.head.banner.image + ")"}}>
            {
              props.head.banner.text && (
                <h1>{ props.head.banner.text }</h1>
              )
            }
          </div>
        )
      }
      <div className="wrapper-content">
        {
          props.isLoading
          ? <Loading />
          : <BodyContainer>{ props.body }</BodyContainer>
        }
        { props.children }
      </div>
    </div>
  )
}

PlainPage.propTypes = {
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  children: PropTypes.node,
}

export default PlainPage

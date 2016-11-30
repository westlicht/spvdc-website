import React, { PropTypes } from "react"
import Helmet from "react-helmet"

import { BodyContainer } from "phenomic"

import Banner from "../../components/Banner"
import Loading from "../../components/Loading"

// import Page from "../Page"

const PlainPage = (props) => {

  const head = props.head
  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  return (
    <div>
      <Helmet
        title={ metaTitle }
      >
      </Helmet>
      {
        props.head.banner && (
          <Banner image={ props.head.banner.image } />
        )
      }
      {/* {
        props.head.banner && (
          <div className="wrapper-banner" style={{backgroundImage: "url(" + props.head.banner.image + ")"}}>
            {
              props.head.banner.text && (
                <h1>{ props.head.banner.text }</h1>
              )
            }
          </div>
        )
      } */}
      <div className="wrapper-content">
        {
          props.head.headline && (
            <h1 className="headline">{ props.head.headline }</h1>
          )
        }
        {
          props.head.subline && (
            <h2 className="subline">{ props.head.subline }</h2>
          )
        }
        {
          props.head.lead && (
            <p className="lead">{ props.head.lead }</p>
          )
        }
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

import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"

import Container from "../../components/Container"
import Loading from "../../components/Loading"

// import styles from "./index.css"

const DocPageWrapper = (props) => {
  let {
    isLoading,
    __filename,
    head,
    children,
  } = props

  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  return (
    <Container>
      <Helmet
        title={ metaTitle }
        htmlAttributes={{ lang: "de" }}
      />
      {
        isLoading ? <Loading /> : children
      }
    </Container>
  )
}

DocPageWrapper.propTypes = {
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  head: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default DocPageWrapper

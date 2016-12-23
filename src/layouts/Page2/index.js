import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { joinUri } from "phenomic"

import Loading from "../../components/Loading"
import Content from "../../components/Content"

// import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    // body,
    // header,
    // footer,
    banner,
    bannerImage,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <Content>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      {/* { banner && <Banner image={ banner } /> } */}
      {/* { banner && banner }
      { bannerImage && <Banner image={ bannerImage } /> } */}
      {/* <Section> */}
        {
          isLoading ? <Loading /> : children
        }
      {/* </Section> */}
    </Content>
  )
}

Page.propTypes = {
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  banner: PropTypes.node,
  bannerImage: PropTypes.string,
  children: PropTypes.node,
  // body: PropTypes.string,
  // header: PropTypes.element,
  // footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page

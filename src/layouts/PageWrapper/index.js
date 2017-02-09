import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { joinUri } from "phenomic"
import QRCode from "qrcode.react"

import translatedPages from "../../utils/translatedPages"

import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Content from "../../components/Content"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Loading from "../../components/Loading"
import BreadCrumbs from "../../components/BreadCrumbs"

// import styles from "./index.css"

const PageWrapper = (props, context) => {
  let {
    isLoading,
    __filename,
    __url,
    head,
    children,
  } = props
  let {
    metadata: { pkg },
    locale,
  } = context


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

  const translations = translatedPages(context)

  return (
    <Container>
      {
        translations.map((item, id) => (
          <Helmet
            key={ id }
            link={ [
              { rel: "alternate", hreflang: item.locale, href: joinUri(context.metadata.pkg.homepage, item.__url) }
            ] }
          />
        ))
      }
      <Helmet
        title={ metaTitle }
        meta={ meta }
        htmlAttributes={{ lang: locale }}
      />

      <Header { ...props } />
      <Content>
        { props.bannerImage && (<Banner image={ props.bannerImage }/>)}
        <BreadCrumbs />
        {
          isLoading ? <Loading /> : children
        }
      </Content>
      <Footer />
      <div id="qrcode">
        <QRCode value={ joinUri(process.env.PHENOMIC_USER_URL, __url) } size={ 64 } />
      </div>
    </Container>
  )
}

PageWrapper.propTypes = {
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

PageWrapper.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default PageWrapper

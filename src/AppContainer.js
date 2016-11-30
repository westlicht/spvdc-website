import React, { PropTypes } from "react"
import Intl from "intl" // load polyfill
(Intl)
import { addLocaleData, IntlProvider } from "react-intl"

import "font-awesome/css/font-awesome.css"

// import "./css/skeleton.global.css"
import "./css/site.global.css"


// import "./index.global.css"
// import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

import flattenMessages from "./utils/flattenMessages"

// import getLang from "./i18n/getLang"
// import getI18n from "./i18n/get"

// Standard locales
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...de, ...en, ...fr])

// Application messages
const messages = {
  de: flattenMessages(require("../content/de/translations.yml")),
  en: flattenMessages(require("../content/en/translations.yml")),
  fr: flattenMessages(require("../content/fr/translations.yml")),
}

class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    location: PropTypes.object,
    locale: PropTypes.string,
    test: PropTypes.string,
  }

  getLocale() {
    let locale = this.props.location.pathname.replace(/^\//, "").split("/")[0]
    if (!["de", "en", "fr"].includes(locale)) {
      locale = "de"
    }
    return locale
  }

  getChildContext() {
    return {
        location: this.props.location,
        locale: this.getLocale(),
    }
  }

  render() {
    const locale = this.getLocale()
    // const locale = getLang(this.context)
    return (
      <IntlProvider locale={ locale } messages={ messages[locale] }>
        <Container>
          {/* <p>{ JSON.stringify(flattenMessages(deLocaleDataApp)) }</p> */}
          <DefaultHeadMeta />
          <Header { ...this.props } />
          <Content>
            { this.props.children }
          </Content>
          <Footer />
        </Container>
      </IntlProvider>
    )

  }
}

// const AppContainer = (props, context) => {
//   // const i18n = getI18n(context)
//   const locale = getLang(context)
//   return (
//     <IntlProvider locale={ locale } messages={ messages[locale] }>
//       <Container>
//         {/* <p>{ JSON.stringify(flattenMessages(deLocaleDataApp)) }</p> */}
//         <DefaultHeadMeta />
//         <Header { ...props } />
//         <Content>
//           { props.children }
//         </Content>
//         <Footer />
//       </Container>
//     </IntlProvider>
//   )
// }
//
// AppContainer.getChildContext = function() {
//   console.log("getChildContext")
//   return {
//       test: "TEST",
//   }
// }
//
// AppContainer.propTypes = {
//   children: PropTypes.node,
//   location: PropTypes.object.isRequired,
// }
//
// AppContainer.contextTypes = {
//   metadata: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired,
// }
//
// AppContainer.childContextTypes = {
//   test: PropTypes.string,
// }

export default AppContainer

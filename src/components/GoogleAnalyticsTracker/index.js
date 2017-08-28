import React, { Component } from "react"
import PropTypes from "prop-types"
import ga from "react-ga"

const isBrowser = (typeof window !== "undefined")
const isProduction = process.env.NODE_ENV === "production"

class GoogleAnalyticsTracker extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const config = this.context.metadata.pkg.config.googleAnalytics
    if (isProduction && isBrowser) {
      ga.initialize(config.ua, { debug: config.debug })
    }
    this.logPageview()
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isProduction && isBrowser) {
      ga.pageview(window.location.pathname)
    }
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.props.children,
    )
  }
}

export default GoogleAnalyticsTracker

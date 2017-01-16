import React, { Component, PropTypes } from "react"
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
    if (isProduction && isBrowser) {
      ga.initialize(this.context.metadata.pkg.config.googleAnalytics.ua, { debug: true })
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

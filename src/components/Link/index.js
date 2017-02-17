// @flow
import React, { PropTypes } from "react"
import cx from "classnames"
import { Link as RouterLink } from "react-router"

const origin = (location) => (
  location.origin ||

  // IE does not correctly handle origin, maybe Edge does...
  (
    location.protocol + "//" +
    location.hostname +
    (location.port ? ":" + location.port: "")
  )
)

const customIsActive = (to, location, onlyActiveOnIndex) => {
  return onlyActiveOnIndex ? (
    location.pathname.valueOf() == to.valueOf()
  ) : (
    location.pathname.startsWith(to)
  )
}

function Link(
  props: {
    className: string,
    activeClassName: string,
    to: string,
    children: any,
  },
  { router, location }: { router: Object, location: Object }
): React.Element<any> {
  const { to, ...otherProps } = props

  const simpleLink = (
    <a
      { ...otherProps }
      href={ to }
      className={ props.className }
    />
  )

  // static rendering
  if (typeof document === "undefined") {
    return simpleLink
  }

  const toLink = document.createElement("a")
  toLink.href = to

  if (
    // parent absolute url with the same domain
    // should not be Link
    to.indexOf("://") > -1 &&
    to.indexOf(process.env.PHENOMIC_USER_URL) === -1
  ) {
    return simpleLink
  }

  if (
    origin(toLink) === origin(window.location)
    // we might want to restrict Link to path including the pathname
    // but this will require to preprend pathname to all Links from the
    // collection, which sucks.
    // If people wants to use Link for a same domain, but in the parent path,
    // you will need to includes the entire url, / won't work at it will use
    // the react-router basename defined by Phenomic.
    // &&
    // toLink.pathname.includes(process.env.PHENOMIC_USER_PATHNAME)
    // toLink.pathname.indexOf(process.env.PHENOMIC_USER_PATHNAME) > -1
  ) {
    return (
      <RouterLink
        { ...otherProps }
        to={ to }
        className={ cx(props.className, {
          [props.activeClassName]: (router && (
            router.isActive({ pathname: props.to }) ||
            customIsActive(props.to, location, props.onlyActiveOnIndex)
          )) && props.activeClassName,
        }) }
      />
    )
  }

  return simpleLink
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  onlyActiveOnIndex: PropTypes.bool,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}

Link.contextTypes = {
  router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

Link.displayName = "Link"

export default Link

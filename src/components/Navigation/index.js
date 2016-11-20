import React, { PropTypes } from "react"
import { Link } from "react-router"

import enhanceCollection from "phenomic/lib/enhance-collection"

import currentPageId from "../../utils/currentPageId"

import styles from "./index.css"

const Navigation = (props, context) => {
  const items = {
    en: require("../../../content/en/navigation.yml"),
    de: require("../../../content/de/navigation.yml"),
    fr: require("../../../content/fr/navigation.yml"),
  }[context.locale]

  const id = currentPageId(context)
  const translations = enhanceCollection(context.collection, {
    filter: { id: id },
    sorted: "locale",
  })

  return (
    <nav className={styles.nav}>
      {
        items.map((item) => (
          <Link
            to={item.url}
            key={item.url}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {/* {
              item.icon &&
              <SVGInline
                className="putainde-Icon"
                svg={ SVGs[item.icon] }
                cleanup
              />
            } */}
            {item.name}
          </Link>
        ))
      }
      {
        translations.map(item => (
          <Link
            to={ item.__url }
            key={ item.__url }
            className={ styles.link }
            activeClassName={ styles.linkActive }
          >
            { item.locale }
          </Link>
        ))
      }

      {/* <Link className={styles.link} to={ "/de/" }>
        { "Deutsch" }
      </Link>
      <Link className={styles.link} to={ "/en/" }>
        { "English" }
      </Link>
      <Link className={styles.link} to={ "/fr/" }>
        { "Français" }
      </Link> */}
    </nav>
  )
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
}

Navigation.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
}

export default Navigation

import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Team from "./layouts/Team"
import PlainPage from "./layouts/PlainPage"
import Contact from "./layouts/Contact"
import Download from "./layouts/Download"
import CoatingIndex from "./layouts/CoatingIndex"
import Coating from "./layouts/Coating"
import Service from "./layouts/Service"
import Entry from "./layouts/Entry"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      Team,
      PlainPage,
      Contact,
      Download,
      CoatingIndex,
      Coating,
      Service,
      Entry,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)

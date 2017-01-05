import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Entry from "./layouts/Entry"
import PageError from "./layouts/PageError"

import PageWrapper from "./layouts/PageWrapper"
import Page from "./layouts/Page"

import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Technology from "./layouts/Technology"
import Service from "./layouts/Service"
import CoatingIndex from "./layouts/CoatingIndex"
import Coating from "./layouts/Coating"
import Download from "./layouts/Download"
import Contact from "./layouts/Contact"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Entry,
      PageError,
      PageWrapper,
      Page,
      Homepage,
      Post,
      Technology,
      Service,
      CoatingIndex,
      Coating,
      Download,
      Contact,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)

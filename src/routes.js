import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import isProduction from "./utils/isProduction"

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

import CoatingDatabase from "./layouts/CoatingDatabase"
import Style from "./layouts/Style"

const layoutsProduction = {
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
}

const layoutsDevelopment = isProduction() ? { } : {
  CoatingDatabase,
  Style,
}

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      ...layoutsProduction,
      ...layoutsDevelopment,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)

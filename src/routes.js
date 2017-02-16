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
import PostIndex from "./layouts/PostIndex"
import Post from "./layouts/Post"
import Technology from "./layouts/Technology"
import Service from "./layouts/Service"
import CoatingIndex from "./layouts/CoatingIndex"
import Coating from "./layouts/Coating"
import Download from "./layouts/Download"
import Contact from "./layouts/Contact"

import DocPageWrapper from "./layouts/DocPageWrapper"
import DocPage from "./layouts/DocPage"
import DocColors from "./layouts/DocColors"
import DocCoatingDatabase from "./layouts/DocCoatingDatabase"

const layoutsProduction = {
  Entry,
  PageError,

  PageWrapper,
  Page,

  Homepage,
  PostIndex,
  Post,
  Technology,
  Service,
  CoatingIndex,
  Coating,
  Download,
  Contact,
}

const layoutsDevelopment = isProduction() ? { } : {
  DocPageWrapper,
  DocPage,
  DocColors,
  DocCoatingDatabase,
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

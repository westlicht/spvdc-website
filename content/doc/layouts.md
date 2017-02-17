---
title: Layouts
layout: DocPage
---
[Documentation](/doc) | [Layouts](/doc/layouts)

***

# Layouts

## Overview

Layouts are used to control the overall structure of a page. The active layout is selected by the `layout` property in the [front-matter](/doc/frontmatter) section. The content for the site is defined both by the [markdown](/doc/markdown) content and optional additional fields in the front-matter section.

## Columns

In general, two types of layouts are used:

- one column layout, covering the full width
- two column layout, left column covering 2/3 and right column covering 1/3 of the width

Two column layouts collapse to a one column layout when the screen width is below some minimal width.

## General Front-Matter Properties

TODO

## Layouts

The following is a list of available layouts.

***

### `Homepage`

Two column layout used for the [Homepage](/en/). Left column shows the markdown content and the right column a list of recent news posts.

*No additional fields in front-matter.*

***

### `Technology`

Two column layout used for the [Technology](/en/technology) page. Left column shows the main markdown content and the right column a list of partners.

The partner list is specified in the front-matter section:

```
partners:
-
  url: http://www.partner.ch
  image: /assets/img/partners/partner.png
  title: Title text
  body: |
    Body text.
-
  ...
```

- `url` - url to an external website
- `image` - path to a logo image
- `alt` - alternate text for the logo image
- `body` - body text in markdown

***

### `Service`

One column layout used for the [Service](/en/service) page. The top section shows the main markdown content followed by a list of service items.

The service items are specified in the front-matter section:

```
sections:
-
  icon: sign-in
  image: /assets/img/service/item.jpg
  title: Title text
  body: |
    Body text.
-
  ...
```

- `icon` - icon name from  [Font Awesome](http://fontawesome.io/icons/)
- `image` - path to a descriptive image
- `title` - title text
- `body` - body text in markdown

***

### `CoatingIndex`

Two column layout used for the [Coatings](/en/coatings) page. The top section shows the main markdown content followed by a list of coatings and a set of filtering drop-downs. Note that the coatings are specified within the [coating database](/doc/). TODO

***

### `Coating`

Two column layout used for individual [Coating](/en/coatings/tin) pages.

TODO

***

### `Download`

One column layout used for the [Downloads](/en/downloads) page. The top section shows the main markdown content followed by a list of download items.

The download items are specified in the front-matter section:

```
downloads:
-
  url: /assets/de/download/file.pdf
  description: Description text.
-
  ...
```

- `url` - url to the document
- `description` - description text in markdown

***

### `Contact`

One column layout used for the [Contact](/en/contact) page. The top section shows the main markdown content followed by a list of team members.

TODO

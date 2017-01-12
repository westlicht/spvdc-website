const glob = require("glob")
const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")

TARGETS = [
  {
    locale: "de",
    dir: "./content/de/beschichtungen",
  },
  {
    locale: "en",
    dir: "./content/en/coatings",
  },
  {
    locale: "fr",
    dir: "./content/fr/revetements",
  },
]

const processCoating = function(src) {
  const data = yaml.safeLoad(fs.readFileSync(src, "utf8"))
  console.log("Processing " + src + " ...")

  TARGETS.forEach(({ locale, dir }) => {
    const content = `---
title: ${data.name}
layout: Coating
id: ${data.id}
locale: ${locale}
---
`
    const dst = path.join(dir, data.id + ".md")
    console.log("Writing " + dst + " ...")
    fs.writeFileSync(dst, content, "utf8")
  })
}

// clear destination dirs
TARGETS.forEach(target => {
  glob(target.dir + "/*.md", (err, files) => {
    files.forEach(file => {
      if (!file.endsWith("index.md")) {
        console.log("Removing " + file + " ...")
      }
    })
  })
})

// write markdown pages for coatings
glob("./content/coatings/catalog/*.yml", (err, files) => {
  files.forEach(file => {
    processCoating(file)
  })
})

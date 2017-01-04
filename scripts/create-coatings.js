const glob = require("glob")
const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")
// const toml = require("toml")
// const camel = require("camelcase")

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
  console.log(data)

  TARGETS.forEach(({ locale, dir }) => {
    const content = `---
title: ${data.name}
layout: Coating
id: ${data.id}
locale: ${locale}
---
`
    const dst = path.join(dir, data.name + ".md")
    console.log(content)
    console.log(dst)
    fs.writeFileSync(dst, content, "utf8")
  })
}


glob("./content/coatings/*.yml", (err, files) => {
  files.forEach((file) => {
    if (file.endsWith("template.yml")) return
    processCoating(file)
  })
})



// const metadata = toml.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'metadata.toml'), 'utf-8'));
//
// metadata.modules.forEach(module => {
//     module.shortName = camel(module.name.replace('postcss', ''));
// });
//
// metadata.modules.forEach(module => {
//     const shortName = module.shortName;
//     const title = module.safe === false ? `${shortName} (unsafe)` : shortName;
//     const content = `---
// title: "${title}"
// layout: Optimisation
// identifier: ${shortName}
// ---
// ${module.longDescription}
// `;
//
//     fs.writeFile(path.join(__dirname, `../content/optimisations/${shortName}.md`), content, err => {
//         if (err) {
//             throw err;
//         }
//     });
// });

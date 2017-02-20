const path = require("path")
const glob = require("glob")
const imagemin = require("imagemin")
const imageminMozjpeg = require("imagemin-mozjpeg")
const sharp = require("sharp")

const config = require("../optimize.config.js")

console.log(config)

console.log("optimizing images")

const processFilter = (file, filter) => {
  console.log("processing " + file + " ...")

  const buf = sharp(file).toBuffer((err, buffer, info) => {
    // skip already processed files if in test mode
    if (config.test) {
      if (file.match(/-processed\./)) {
        console.log("skipping " + file)
        return
      }
    }

    if (err) {
      console.log("failed to load " + file + " (" + err + ")")
    } else {
      let img = sharp(buffer)

      if (filter.size) {
        // console.log("resizing to " + filter.size)
        img = img.withoutEnlargement()
        img = img.resize(...filter.size)
      }

      if (filter.sharpen) {
        img = img.sharpen()
      }

      if (filter.jpeg) {
        img = img.jpeg(filter.jpeg)
      }

      if (config.test) {
        parsed = path.parse(file)
        file = path.join(parsed.dir, parsed.name + "-processed" + parsed.ext)
      }

      img.toFile(file, (err, info) => {
        if (err) {
          console.log("failed to save " + file + " (" + err + ")")
        } else {
          if (filter.optimize) {
            // console.log("optimizing")
            imagemin([file], path.dirname(file), {
              plugins: [
                imageminMozjpeg(),
              ]
            }).then(files => {
            })
          }
        }
      })

    }
  })
}


glob(config.root + "/**/*.?(jpg|png)", function(err, files) {
  files.forEach(file => {
    // console.log("optimizing " + file + " ...")
    relative = path.relative(config.root, file)

    Object.keys(config.filters).forEach(key => {
      const filter = config.filters[key]
      if (relative.match(filter.match)) {
        processFilter(file, filter)
      }
    })
  })
})

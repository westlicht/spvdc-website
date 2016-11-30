const path = require("path")
const glob = require("glob")
const imagemin = require("imagemin")
const imageminMozjpeg = require('imagemin-mozjpeg');

const IMAGES_DIR = "dist/assets"

console.log("optimizing images")

// Optimize JPGs
glob(IMAGES_DIR + "/**/*.jpg", function(err, files) {
  files.forEach(file => {
    console.log("optimizing " + file + " ...")
    imagemin([file], path.dirname(file), {
      plugins: [
        imageminMozjpeg(),
      ]
    }).then(files => {
    })
  })
})

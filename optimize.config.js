module.exports = {
  root: "dist/assets/img",
  test: false,
  filters: {
    // default: {
    //   match:
    //   size: [100,100],
    // },
    banner: {
      match: /banner\/.*jpg$/,
      size: [2500,833],
      sharpen: true,
      optimize: true,
    },
    coatings: {
      match: /coatings\/.*jpg$/,
      size: [500,500],
      sharpen: true,
      optimize: false,
    },
    service: {
      match: /service\/.*jpg$/,
      size: [750,500],
      sharpen: false,
      optimize: false,
    },
    team: {
      match: /team\/.*jpg$/,
      size: [375,500],
      optimize: false,
    },
  },
}

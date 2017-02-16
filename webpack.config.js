import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { phenomicLoader } from "phenomic"
import PhenomicLoaderFeedWebpackPlugin
  from "phenomic/lib/loader-feed-webpack-plugin"
import PhenomicLoaderSitemapWebpackPlugin
  from "phenomic/lib/loader-sitemap-webpack-plugin"

import pkg from "./package.json"

export default (config = {}) => {
  const postcssPlugins = (webpack) => [
    require("stylelint")({
      config: require("./stylelint.config.js"),
    }),
    require("postcss-partial-import")({
      addDependencyTo: webpack,
    }),
    require("postcss-mixins")(),
    require("postcss-media-minmax")(),
    require("postcss-neat")(),
    require("postcss-nested")(),
    require("postcss-inherit")(),
    require("postcss-cssnext")({
      browsers: "last 4 versions",
      features: {
      },
    }),
    require("postcss-reporter")(),
    ...config.production ? [
    ] : [
      require("postcss-browser-reporter")(),
    ],
  ]

  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },

    // phenomic: {
    //   plugins: [
    //     ...require("phenomic/lib/loader-preset-markdown").default,
    //     require("./src/loader-plugin-transform-md-head-property-to-html").default,
    //   ],
    // },

    module: {
      noParse: /\.min\.js/,
      // webpack 1
      // loaders: [
      // webpack 2
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          ...config.production ? {
            exclude: path.resolve(__dirname, "content/doc")
          } : {},
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            plugins: [
              // ...require("phenomic/lib/loader-preset-markdown").default,
              ...require("phenomic/lib/loader-preset-default").default,
              require("phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content").default,
              // require("phenomic/lib/loader-plugin-markdown-transform-body-property-to-html").default,
              require("./src/loader-plugin-markdown-transform-body-property-to-html").default,
              // require("./src/loader-plugin-transform-md-head-property-to-html").default,
              // require("./src/plugins/loader-plugin-extract-locale").default,
            ],
            // see https://phenomic.io/docs/usage/plugins/
          },
        },

        // *.json => like in node, return json
        // (not handled by webpack by default)
        {
          test: /\.json$/,
          loader: "json-loader",
        },

        // // *.yml => return json
        {
          test: /\.yml$/,
          loaders: [ "json-loader", "yaml-loader" ],
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "content"),
          ],
          loaders: [
            "babel-loader?cacheDirectory",
            "eslint-loader" + (config.dev ? "?emitWarning" : ""),
          ],
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: path.resolve(__dirname, "src"),
          // webpack 1
          // loader: ExtractTextPlugin.extract(
          //   "style-loader",
          //   [ `css-loader?modules&localIdentName=${
          //     config.production
          //     ? "[hash:base64:5]"
          //     : "[path][name]--[local]--[hash:base64:5]"
          //     }`,
          //     "postcss-loader",
          //   ].join("!"),
          // ),
          // webpack 2
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              {
                loader: "css-loader",
                query: {
                  modules: true,
                  localIdentName: (
                    config.production
                    ? "[hash:base64:5]"
                    : "[path][name]--[local]--[hash:base64:5]"
                  ),
                },
              },
              {
                loader: "postcss-loader",
                query: { "plugins": postcssPlugins },
                // query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // query: { plugins: postcssPlugins },
              },
            ],
          }),
        },
        // *.global.css => global (normal) css
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, "src"),
          // webpack 1
          // loader: ExtractTextPlugin.extract(
          //   "style-loader",
          //   [ "css-loader", "postcss-loader" ].join("!"),
          // ),
          // webpack 2
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              "css-loader",
              {
                loader: "postcss-loader",
                query: { "plugins": postcssPlugins },
                // query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // query: { plugins: postcssPlugins },
              },
            ],
          }),
        },
        // node_modules CSS
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "node_modules"),
          // webpack 1
          // loader: ExtractTextPlugin.extract(
          //   "style-loader",
          //   "css-loader",
          // ),
          // webpack 2
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              "css-loader",
            ],
          }),
        },
        // ! \\
        // If you want global CSS only, just remove the 2 sections above
        // and use the following one
        // ! \\ If you want global CSS for node_modules only, just uncomment
        // this section and the `include` part
        // // webpack 1
        /*
        {
          test: /\.css$/,
          // depending on your need, you might need to scope node_modules
          // for global CSS if you want to keep CSS Modules by default
          // for your own CSS. If so, uncomment the line below
          // include: path.resolve(__dirname, "node_modules"),
          loader: ExtractTextPlugin.extract(
            "style-loader",
            [
              "css-loader",
              "postcss-loader",
            ].join("!")
          ),
        },
        */
        // // webpack 2
        /*
        {
          test: /\.css$/,
          // depending on your need, you might need to scope node_modules
          // for global CSS if you want to keep CSS Modules by default
          // for your own CSS. If so, uncomment the line below
          // include: path.resolve(__dirname, "node_modules"),
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              "css-loader",
              {
                loader: "postcss-loader",
                query: { "plugins": postcssPlugins },
              },
            ]
          }),
        },
        */
        // ! \\ if you want to use Sass or LESS, you can add sass-loader or
        // less-loader after postcss-loader (or replacing it).
        // ! \\ You will also need to adjust the file extension
        // and to run the following command
        //
        // Sass: `npm install --save-dev node-sass sass-loader`
        // https://github.com/jtangelder/sass-loader
        //
        // LESS: npm install --save-dev less less-loader
        // https://github.com/webpack/less-loader

        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2|svg)$/,
          exclude: path.resolve(__dirname, "node_modules"),
          loader: "file-loader",
          query: {
            name: "[path][name].[hash].[ext]",
            context: path.join(__dirname, config.source),
          },
        },

        // copy assets in node_modules into assets/vendor
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2|svg)\??/,
          include: path.resolve(__dirname, "node_modules"),
          loader: "file-loader",
          query: {
            name: "assets/vendor/[name].[hash].[ext]",
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        // {
        //   test: /\.svg\??/,
        //   loader: "raw-loader",
        // },
      ],
    },

    // webpack 1
    // postcss: function(webpack) { return postcssPlugins(webpack) },

    plugins: [
      // webpack 2
      // You should be able to remove the block below when the following
      // issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in query, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname,
        },
      }),

      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        // This param is mandatory. You must specify your site url.
        // Here we take the url we specified in the `package.json`
        site_url: pkg.homepage,
        // this special key allows to filter the collection
        collectionOptions: {
          // For example you can add a front-matter metadata to your `.md` files
          // We display all urls in sitemap except if front-matter `isInSitemap: false` is defined
          filter: (c) => typeof(c.isInSitemap) === "undefined" || c.isInSitemap === true,
          sort: "__url",
        },
      }),

      // webpack 1
      // new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
      // webpack 2
      new ExtractTextPlugin({
        filename: "[name].[hash].css",
        disable: config.dev,
      }),

      ...config.production && [
        // webpack 2
        // DedupePlugin does not work correctly with Webpack 2, yet ;)
        // https://github.com/webpack/webpack/issues/2644
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    // webpack 1
    // resolve: {
    //   extensions: [ ".js", ".json", "" ],
    //   root: [ path.join(__dirname, "node_modules") ],
    // },
    // resolveLoader: { root: [ path.join(__dirname, "node_modules") ] },
    // webpack 2
    resolve: { extensions: [ ".js", ".json" ] },
    resolveLoader: {
      modules: [ path.join(__dirname, "node_modules") ],
    }
  }
}

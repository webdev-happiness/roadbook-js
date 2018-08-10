const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // UGLYFY IN PROD MODE
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // EXTRACT CSS IN PROD MODE
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// GLOBALS
global.roads = require(path.resolve(__dirname, 'assets/fake-data/roads.js'));
global.faker = require('faker');
global.faker.locale = "fr";
// GET ENV VAR FROM COMMAND LINE
const dev = process.env.NODE_ENV === "dev";

/*
* DEFAULT CSS LOADER
*/
const defaultCssLoaders = [
  {loader: (dev) ? "style-loader": MiniCssExtractPlugin.loader},
  {loader: 'css-loader', options: {importLoader: 1}}
]

if(!dev){
  defaultCssLoaders.push({
    loader: 'postcss-loader',
    options:{
      plugins: (loader) => [
        require('autoprefixer')({
          browsers: ["last 2 versions", "ie > 8"]
        }),
        require('cssnano')(),
      ]
    }
  })
}



/*
* CONFIG GENERAL
*/
var config = {
  mode: "development",
  entry: {
    app: ["./assets/js/app.js", "./assets/styles/app.scss"],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? '[name].js' : '[name].[chunkhash:8].js'
  },
  devtool: (dev)? "cheap-module-source-map" : false,
  devServer:{
    overlay: true
  },
  module:{
    rules: [
      // RULES
      /*{
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{loader: 'eslint-loader'}]
      },*/
      { // JS
        test: /\.ejs$/,
        use: [{loader: 'ejs-loader'}]
      },
      { // JS
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{loader: 'babel-loader'}]
      },
      { // CSS
        test: /\.css$/,
        use: defaultCssLoaders
      },
      { // SCSS
        test: /\.scss$/,
        use:[
          ...defaultCssLoaders,
          {loader: 'sass-loader'}
        ]
      },
      { // FONTS
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      { // IMAGES
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: (dev) ? '[path][name].[ext]' : '[name].[hash:8].[ext]',
              limit: 8192
            }
          },
          {
            loader: 'img-loader',
            options: {
              enabled: !dev
            }
          }
        ]
      }
      // END RULES
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'assets'),
    }
  },
  plugins:[
    new MiniCssExtractPlugin(
      {filename: dev ? '[name].css' : '[name].[hash:8].css'},
    ),
    new HtmlWebpackPlugin({template: 'index.ejs'})
  ],
  watch: true,
  watchOptions: {
    poll: true
  }
}


// ONLY FOR PRODUCTION MODE
if(!dev){
  config.plugins.push(new UglifyJsPlugin())

  // MANIFEST FOR ASSETS
  config.plugins.push(new ManifestPlugin())

  // CLEAN DIST FOLDER
  config.plugins.push(new CleanWebpackPlugin(['dist'],{
    root: path.resolve('./'),
    verbose: true,
    dry: false
  }))
}


module.exports = config;

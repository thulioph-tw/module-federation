const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const baseWebpackConfig = require('../webpack.config.base')

const mode = process.env.NODE_ENV || 'production';

// third step
const getPublicPath = (environment) => {
  if (environment !== 'production') {
    return 'http://localhost:3001/' // app development route
  }

  return 'http://localhost:3001/' // app production route
}

module.exports = {
  ...baseWebpackConfig,
  entry: './src/index',
  output: {
    publicPath: getPublicPath(mode)
  },
  plugins: [
    // third step
    new ModuleFederationPlugin({
      name: 'app_a',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button' // button component exposed as a moduled called `Button`
      },
      remotes: {
        'app_b': 'app_b@http://localhost:3002/remoteEntry.js'
      },
      shared: require('./package.json').dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
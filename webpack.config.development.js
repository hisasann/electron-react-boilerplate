/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
  'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
  './app/index'
];

config.output.publicPath = 'http://localhost:3000/dist/';

config.module.loaders.push({
  test: /\.global\.css$/,
  loaders: [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader'
  ]
}, {
  test: /^((?!\.global).)*\.css$/,
  loaders: [
    'style-loader',
    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ]
});

config.postcss = function postcss() {
  return [
    require('postcss-size'),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
    require('postcss-css-variables'),
    require('postcss-import')
  ];
};


config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true,
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;

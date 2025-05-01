const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process/browser.js'),  // <--- OJO AQUÍ
    buffer: require.resolve('buffer/'),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser.js', // <--- TAMBIÉN AQUÍ
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  return config;
};